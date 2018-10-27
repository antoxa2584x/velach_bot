import { NotImplementedError } from './errors';

class Middleware {
  constructor(bot) {
    this.bot = bot;
  }

  async processMessage() { // eslint-disable-line
    throw new NotImplementedError();
  }
}

module.exports = Middleware;
