FROM node:17-alpine as builder
WORKDIR /google-drive-react
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN export NODE_OPTIONS=--openssl-legacy-provider
RUN npm start 