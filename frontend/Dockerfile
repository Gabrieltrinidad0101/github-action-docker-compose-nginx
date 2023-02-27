FROM node:18

WORKDIR /usr/app/frontend

COPY package.json .

RUN npm install

COPY . .

RUN chmod 777 ./node_modules

RUN ["npm","run","build"]

FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

COPY dist /usr/share/nginx/html

CMD ["nginx","-g","daemon off;"]