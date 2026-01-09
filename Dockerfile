# Étape 1 : On construit le site
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2 : On sert le site avec Nginx
FROM nginx:alpine
# On copie le site construit dans le dossier de Nginx
COPY --from=builder /app/out /usr/share/nginx/html
# Config par défaut de Nginx pour le port 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]