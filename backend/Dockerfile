FROM node:20-alpine

WORKDIR /node-backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
