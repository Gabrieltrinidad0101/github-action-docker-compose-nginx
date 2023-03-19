FROM node:18-alpine as build

WORKDIR /usr/app/frontend

COPY package.json .

RUN npm install .

CMD ["npm","run","dev"]
