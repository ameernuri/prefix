FROM node:alpine

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package*.json ./
COPY yarn.lock ./

COPY . ./

RUN yarn
# // note: Equivalent to npm ci 
# RUN rm -rf node_modules && yarn install --frozen-lockfile


CMD ["yarn", "client:dev"]

