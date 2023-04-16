FROM node:14-alpine
WORKDIR /app
COPY Task.js package.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD node Task.js
