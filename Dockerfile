FROM node:16.19-alpine AS development

#  Navigate to the container working directory 
WORKDIR /usr/src/app

#  Copy package.json
COPY package*.json ./

RUN yarn install

COPY . .

RUN npm run build