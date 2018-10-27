const { NotImplementedError } = require('./errors');


class Handler {
  constructor(bot) {
    this.bot = bot;
  }

  async handleMessage() { // eslint-disable-line
    throw new NotImplementedError();
  }
}


module.exports = Handler;
