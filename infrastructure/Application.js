const TelegramBot = require('node-telegram-bot-api');

const settings = require('../settings');
const TelegramMessageDTO = require('../dto/TelegramMessageDTO');
const { MessageHandlingError } = require('./errors');
const Router = require('./Router');


class Application {
  static get routes() {
    return [];
  }

  constructor() {
    this.bot = new TelegramBot(settings.get('telegram.token'));

    const routes = this.constructor.routes.map(RouteCls => new RouteCls(this.bot));
    this.router = new Router(routes);
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
    return this.router.routeMessage(messageData);
  }
}


module.exports = Application;
