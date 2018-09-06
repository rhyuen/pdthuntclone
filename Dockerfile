FROM node:alpine AS frontendassets
MAINTAINER rhyuen
COPY package.json package.json
RUN npm install
COPY . .
RUN npm start

FROM nginx:alpine
COPY --from=frontendassets ./dist /var/www
COPY nginx.conf /etc/nginx/nginx.conf