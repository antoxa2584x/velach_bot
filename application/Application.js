const TelegramBot = require('node-telegram-bot-api');

const settings = require('../settings');
const TelegramMessageDTO = require('../dto/TelegramMessageDTO');
const { NotImplementedError, MessageHandlingError } = require('../errors');


class Application {
  static get middlewares() {
    return [];
  }

  constructor() {
    this.bot = new TelegramBot(settings.get('telegram.token'));
  }

  async start() {
    this.bot.info = await this.bot.getMe();

    this.bot.on(
      'message',
      this.onMessage.bind(this),
    );

    this.bot.startPolling();
  }

  async onMessage(rawMessage) {
    const telegramMessageData = new TelegramMessageDTO(rawMessage)

    try {
      await this.handleMessage(telegramMessageData);
    } catch (error) {
      throw new MessageHandlingError();
    }
  }

  async handleMessage() { // eslint-disable-line
    throw new NotImplementedError();
  }
}


module.exports = Application;
