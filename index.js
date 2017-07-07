const TelegramBot = require('node-telegram-bot-api');
const request = require('request');
const token = '448548721:AAHWyJD3FyD52uQUfndx4MAKykQ7zJj2HLc';

const bot = new TelegramBot(token, {polling: true});
const currentWeatherUrl = 'http://taganrog.azovseaports.ru/weather/Graph/weather.png';
const windArchiveUrl = 'http://taganrog.azovseaports.ru/weather/Graph/wind.png'

bot.onText(/\/current/, (msg, match) => {
  const chatId = msg.chat.id;
  const stream = request.get(currentWeatherUrl);
  bot.sendPhoto(chatId, stream);
});

bot.onText(/\/archive/, (msg, match) => {
  const chatId = msg.chat.id;
  const stream = request.get(windArchiveUrl);
  bot.sendPhoto(chatId, stream);
});

bot.onText(/\/map/, (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendLocation(chatId, 47.204642388766935, 38.94378662109375);
});

bot.onText(/\/help|\/start/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = `
<b>/current</b> - get current value \n\r
<b>/archive</b> - archive per day \n\r
<b>/map</b> - view location \n\r
<b>/help</b> - view help commands \n\r

<i>Resource of weather value</i> <a href="http://taganrog.azovseaports.ru">taganrog.azovseaports.ru</a>
  `;
  bot.sendMessage(chatId, resp, { parse_mode : 'HTML' });
});
