FROM node:18-alpine as build

WORKDIR /usr/app/frontend

COPY package.json .

RUN npm install .

COPY . .

RUN npm run build

FROM nginx

COPY --from=build /usr/app/frontend/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d

CMD ["nginx","-g","'daemon on;'"]