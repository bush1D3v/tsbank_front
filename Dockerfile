FROM oven/bun:1

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install

COPY . .

RUN bun run build
RUN bun run build-storybook

EXPOSE 3000 6006

CMD ["bun", "run", "dev"]
