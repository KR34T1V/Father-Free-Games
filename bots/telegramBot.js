const config = require('../config.js')
const TelegramBot = require('node-telegram-bot-api');
const tb = new TelegramBot(config.telegramBotToken)

 function broadcast(msg) {
  config.broadcastChannels.forEach(element => {
    tb.sendMessage(element, msg);
  });
}

module.exports = {
  broadcast
}