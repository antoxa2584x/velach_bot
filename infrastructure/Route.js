import { NotImplementedError } from './errors';


class Route {
  static get middlewareClsList() {
    return [];
  }

  static get HandlerCls() {
    return null;
  }

  constructor(bot) {
    this.middlewares = this.constructor.MiddlewareClsList.map(Cls => new Cls(bot));
    this.handler = new this.constructor.HandlerCls(bot);
  }

  isMatching(messageData) { // eslint-disable-line
    throw new NotImplementedError();
  }

  async processMessage(messageData) { // eslint-disable-line
    let processedMessageData = messageData;

    for (const middleware of this.middlewares) { // eslint-disable-line
      processedMessageData = await middleware.processMessage(processedMessageData); // eslint-disable-line
    }

    await this.handler.handleMessage(processedMessageData);
  }
}


module.exports = Route;
