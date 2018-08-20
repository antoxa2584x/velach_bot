const Middleware = require('./Middleware');
const { NotImplementedError } = require('../errors');
const BikecheckService = require('../services/BikecheckService');


class CommandMiddleware extends Middleware {
  static get command() {
    throw new NotImplementedError();
  }

  async processMessage(message) { // eslint-disable-line
    if (!message.hasEntities()) {
      return message;
    }

    const commandEntities = message.entities.filter(e => e.isCommand());

    commandEntities.forEach(async (commandEntity) => {
      const command = commandEntity.getCommand();

      if (command === 'bikecheck') {
        const service = new BikecheckService();
        await service.setActiveBikecheck(message.from.id, message.photo.fileId);
      }
    });
  }
}


module.exports = CommandMiddleware;
