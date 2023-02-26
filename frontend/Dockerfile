FROM node:18

WORKDIR /usr/app/frontend

COPY package.json .

RUN npm install

COPY . .

RUN chmod 777 ./node_modules

CMD ["yarn","run","build"]