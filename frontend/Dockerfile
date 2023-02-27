FROM node:18

WORKDIR /usr/app/frontend
ARG MY_SECRET

COPY package.json .

RUN npm install

COPY . .

RUN chmod 777 ./node_modules

RUN npm run build

FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

COPY --from=dist /app/dist /usr/share/nginx/html



RUN echo "${MY_SECRET}" | nginx -s reload

CMD ["nginx","-g","daemon off;"]