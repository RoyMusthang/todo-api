FROM node:16-alpine

WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./
COPY . .
RUN npm install --silent
RUN npm run build

ENTRYPOINT [ "npm", "start" ]
