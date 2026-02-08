FROM node:20-alpine
WORKDIR /app

COPY server/package*.json server/
RUN npm ci --omit=dev --prefix server

COPY server server
WORKDIR /app/server

ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080

CMD ["node", "server.js"]
