FROM node:21-alpine as builder

WORKDIR /app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


FROM nginx:1.20-alpine

ENV NGINX_PROTOCOL http2

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx-config /etc/nginx
