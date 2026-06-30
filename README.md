# marina-soberana-landing

Public sales/landing page for Marina's flagship "Soberana" program, plus a
short lead-qualification funnel (`/aplicar`). Independently deployable from
the learning platform (`marina-soberana-frontend`) — see that repo's
`CLAUDE.md` for the overall project context.

No authentication: every page and API call here is public. The funnel talks
to the shared backend's public `/leads/*` endpoints.

## Dev

```bash
docker compose up --build   # http://localhost:3400
```

or locally:

```bash
npm install
npm run dev   # http://localhost:3000
```

Requires `NEXT_PUBLIC_API_URL` (see `.env.example`) pointing at the
`marina-soberana-backend` API (default `http://localhost:8000`).

## Prod

```bash
docker compose -f docker-compose.prod.yml up --build
```
