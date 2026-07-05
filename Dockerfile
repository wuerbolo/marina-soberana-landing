# syntax=docker/dockerfile:1

# ─────────────────────────────────────────────────────────────────────────────
# Multi-stage build for the Soberana public landing page.
#   target: dev     -> hot-reloading `next dev` (source bind-mounted by compose)
#   target: runner  -> small production image (`next start` via standalone output)
# Build dev:   docker compose up --build
# Build prod:  docker compose -f docker-compose.prod.yml up --build
# ─────────────────────────────────────────────────────────────────────────────

FROM node:22-bookworm-slim AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# ---- deps: install node_modules once, reuse across stages ----
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# ---- dev: hot reload; source comes from a bind mount at runtime ----
FROM base AS dev
ENV NODE_ENV=development
COPY --from=deps /app/node_modules ./node_modules
EXPOSE 3000
# Bind to 0.0.0.0 so the published port is reachable from the host.
CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0", "-p", "3000"]

# ---- builder: produce the standalone production build ----
FROM base AS builder
# NEXT_PUBLIC_* vars are inlined into the client bundle at build time.
ARG NEXT_PUBLIC_API_URL=http://localhost:8000
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
# Cloudflare Web Analytics beacon token. Not a secret (it's a public client-side
# beacon id), but kept as a build arg so it's not hardcoded in source.
ARG NEXT_PUBLIC_CF_BEACON_TOKEN=
ENV NEXT_PUBLIC_CF_BEACON_TOKEN=$NEXT_PUBLIC_CF_BEACON_TOKEN
# Sentry source-map upload at build time. Empty (default) skips the upload
# with a warning — builds never fail for lack of a token. Builder-stage only:
# the token never reaches the runner image.
ARG SENTRY_AUTH_TOKEN=
ENV SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- runner: minimal production runtime ----
FROM base AS runner
ENV NODE_ENV=production
RUN groupadd --system --gid 1001 nodejs \
 && useradd --system --uid 1001 --gid nodejs nextjs

# Standalone output: server + only the node_modules it actually needs.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000 HOSTNAME=0.0.0.0
CMD ["node", "server.js"]
