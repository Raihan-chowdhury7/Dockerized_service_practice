FROM node:18-alpine
WORKDIR /Docker_node
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]
