FROM node:6.10.2
RUN node -v

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV TELEGRAM_TOKEN='448548721:AAHWyJD3FyD52uQUfndx4MAKykQ7zJj2HLc'

COPY . /usr/src/app
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]