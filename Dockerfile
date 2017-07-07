FROM node:6.10.2
RUN node -v

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install
EXPOSE 3000
CMD [ "node", "./index.js" ]