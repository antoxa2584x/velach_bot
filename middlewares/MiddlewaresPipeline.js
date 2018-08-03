/* eslint-disable no-await-in-loop */

class MiddlewaresPipeline {
  constructor(middlewares = []) {
    this.middlewares = middlewares;
  }

  async processMessage(message) {
    let processedMessage = message;

    for (let i = 0; i < this.middlewares.length; i += 1) {
      try {
        processedMessage = await this.middlewares[i].processMessage(processedMessage);
      } catch (err) {
        console.error(err);
        break;
      }
    }
  }
}


module.exports = MiddlewaresPipeline;
