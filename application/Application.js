const TelegramBot = require('node-telegram-bot-api');

const MiddlewaresPipelineFactory = require('../middlewares/MiddlewaresPipelineFactory');
const settings = require('../settings');
const getBoundMethod = require('../utils/get_bound_method');


class Application {
  static get middlewares() {
    return [];
  }

  constructor() {
    this.bot = new TelegramBot(settings.get('telegram.token'));
    this.middlewaresPipelineFactory = new MiddlewaresPipelineFactory(
      this.constructor.middlewares,
      this.bot,
    );
  }

  async start() {
    this.bot.info = await this.bot.getMe();

    this.bot.on(
      'message',
      getBoundMethod(this.processMessage, this),
    );
    this.bot.startPolling();
  }

  async processMessage(message) {
    const pipeline = this.middlewaresPipelineFactory.getInstance();
    await pipeline.processMessage(message);
  }
}


module.exports = Application;
