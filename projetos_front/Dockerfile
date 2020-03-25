FROM node:slim
WORKDIR /root/
COPY . .
RUN npm i && npx ng build

FROM nginx:alpine
WORKDIR /var/www/app
COPY --from=0 /root/dist/. .
COPY --from=0 /root/nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]