FROM node:20-alpine
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install --production
COPY . .
EXPOSE 8080
CMD ["node", "dist/server.js"]
