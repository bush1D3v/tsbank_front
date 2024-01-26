FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build
RUN yarn build-storybook

EXPOSE 3000 6006

CMD ["yarn", "dev"]
