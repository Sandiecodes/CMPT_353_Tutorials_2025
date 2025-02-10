FROM node:latest
EXPOSE 8080
WORKDIR /code
COPY *.json .
COPY . .
RUN npm install
CMD ["node", "app_promise.js"]