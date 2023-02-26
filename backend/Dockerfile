FROM node:18

WORKDIR /usr/app/backend

COPY ./package.json .

RUN npm i -g yarn

RUN yarn 

COPY . .

CMD ["yarn","run","dev"]