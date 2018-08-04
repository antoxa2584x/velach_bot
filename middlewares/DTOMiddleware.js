const Middleware = require('./Middleware');
const TelegramMessageDTO = require('../dto/TelegramMessageDTO');


class DTOMiddleware extends Middleware {
  async processMessage(message) { // eslint-disable-line
    const messageDTO = new TelegramMessageDTO(message);
    return messageDTO;
  }
}


module.exports = DTOMiddleware;
