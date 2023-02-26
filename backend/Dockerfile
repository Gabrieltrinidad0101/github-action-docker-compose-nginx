FROM node:18

WORKDIR /usr/app/backend

COPY ./package.json .

RUN npm install

COPY . .

CMD ["yarn","run","dev"]