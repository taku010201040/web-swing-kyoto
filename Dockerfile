# 京都を駆け抜けろ：ゲーム配信＋チーム記録サーバー
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
ENV PORT=8080 DATA_DIR=/data TRUST_PROXY=1
EXPOSE 8080
CMD ["node", "server.js"]
