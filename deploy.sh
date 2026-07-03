#!/usr/bin/env bash
# Pull latest and redeploy the landing page. Run on the VPS, inside this repo.
set -euo pipefail

git pull
docker compose -f docker-compose.prod.yml up -d --build
