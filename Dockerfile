# ETAPE 1 : Base
FROM node:20-alpine AS base

# ETAPE 2 : Dépendances
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
# Installation propre des dépendances
RUN npm ci

# ETAPE 3 : Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Important : On désactive la télémétrie pour le respect de la vie privée
ENV NEXT_TELEMETRY_DISABLED 1

# On lance la construction du site
RUN npm run build

# ETAPE 4 : Runner (Production) - C'est ici qu'on change tout !
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Création d'un utilisateur système pour la sécurité
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# On copie les fichiers générés par le mode "standalone"
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# On utilise l'utilisateur sécurisé
USER nextjs

# On ouvre le port 3000 (standard Node.js) au lieu de 80
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Commande de démarrage : on lance Node, plus Nginx
CMD ["node", "server.js"]