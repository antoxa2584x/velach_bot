const TelegramBot = require('node-telegram-bot-api');

const settings = require('../settings');
const TelegramMessageDTO = require('../dto/TelegramMessageDTO');
const { MessageHandlingError } = require('../infrastructure/errors');
const Router = require('../infrastructure/Router');


class Application {
  constructor() {
    this.bot = new TelegramBot(settings.get('telegram.token'));
    this.router = new Router();
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
    const messageData = new TelegramMessageDTO(rawMessage);

    try {
      await this.handleMessage(messageData);
    } catch (error) {
      throw new MessageHandlingError();
    }
  }

  handleMessage(messageData) {
    const routes = this.router.getMatchingRoutes(messageData);
    const handlers = routes.map(route => route.getHandlerInstance(messageData, this.bot));
    return Promise.all(handlers.map(handler => handler.handle()));
  }
}


module.exports = Application;
