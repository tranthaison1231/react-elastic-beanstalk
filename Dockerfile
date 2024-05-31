FROM node:22-alpine as build-stage
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

FROM nginx:latest as prod-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80/tcp

CMD ["nginx", "-g", "daemon off;"]

