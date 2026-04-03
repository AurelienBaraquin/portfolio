# ---- Étape 1 : Build ----
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# On compile le projet Next.js classique (pas d'export statique)
RUN npm run build

# ---- Étape 2 : Runtime ----
FROM node:20-alpine AS runtime
WORKDIR /app
COPY --from=builder /app/package.json ./
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# On lance le serveur Next.js intégré (qui supporte les Server Actions !)
CMD ["npm", "start"]