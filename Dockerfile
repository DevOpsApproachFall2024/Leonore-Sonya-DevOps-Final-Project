FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

EXPOSE 3000

ENV NODE_ENV=production

RUN npm test

CMD ["node", "index.js"]
