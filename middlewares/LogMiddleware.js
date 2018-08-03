const Middleware = require('./Middleware');


class LogMiddleware extends Middleware {
  async processMessage(message) {
    console.log(message);
    return message;
  }
}


module.exports = LogMiddleware;
