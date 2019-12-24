FROM node:carbon
WORKDIR /lab3
COPY ./package.json ./
COPY ./webpack.config.js ./
RUN npm install -g serve
RUN npm install
COPY ./src ./src
RUN npm run build
RUN ls dist
EXPOSE 8080
CMD ["serve", "-s", "dist", "-p", "8080"]
