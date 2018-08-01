const TelegramBot = require('node-telegram-bot-api');

const settings = require('../settings');
const Models = require('../models');


class Application {
  constructor() {
    this.models = new Models();
    this.bot = new TelegramBot(settings.get('telegram.token'));
  }

  start() {}
}


module.exports = Application;
