FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

RUN npm run seed-db

EXPOSE 3003

CMD [ "npm", "run", "server-dev" ]
