const { NotImplementedError } = require('./errors');


class Handler {
  constructor(messageData, bot) {
    this.messageData = messageData;
    this.bot = bot;
  }

  async handle() { // eslint-disable-line
    throw new NotImplementedError();
  }
}


module.exports = Handler;
