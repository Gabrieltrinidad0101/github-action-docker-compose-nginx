FROM node:18

WORKDIR /usr/app/frontend

COPY package.json .

RUN npm i -g yarn

RUN  yarn

COPY . .

RUN chmod 777 ./node_modules

CMD ["yarn","run","build"]