# Image de production déployée par Coolify (Build Pack : Dockerfile, port 80).
# Deux étapes : Node construit l'export statique, puis seul le dossier out/
# est copié dans une image nginx légère, sans Node ni node_modules.

FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.29-alpine
# Remplace la config par défaut : en-têtes de sécurité, cache, redirections
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 80
