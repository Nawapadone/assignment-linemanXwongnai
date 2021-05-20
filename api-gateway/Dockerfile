FROM node:12-alpine as builder

COPY ./package.json /app/
WORKDIR /app/

RUN npm i --production

COPY . /app/
CMD ["node" , "./server.js"]

EXPOSE 3333