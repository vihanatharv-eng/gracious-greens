FROM node:22-alpine AS base
RUN npm install -g pnpm

# ─── Builder ──────────────────────────────────────────────────────────────────
FROM base AS builder
WORKDIR /app

COPY pnpm-workspace.yaml package.json pnpm-lock.yaml* ./
COPY apps/hermes/package.json ./apps/hermes/
COPY packages/ai/package.json ./packages/ai/
COPY packages/core/package.json ./packages/core/
COPY packages/db/package.json ./packages/db/
COPY packages/config/package.json ./packages/config/

RUN pnpm install --frozen-lockfile

COPY apps/hermes ./apps/hermes
COPY packages ./packages

RUN pnpm --filter=@gg/hermes run build

# ─── Runner ───────────────────────────────────────────────────────────────────
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN npm install -g pnpm

COPY --from=builder /app/apps/hermes/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/hermes/package.json .

EXPOSE 3001

CMD ["node", "dist/main.js"]
