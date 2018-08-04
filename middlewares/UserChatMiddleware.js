const Middleware = require('./Middleware');
const Chat = require('../entities/Chat');
const User = require('../entities/User');


class UserChatMiddleware extends Middleware {
  async processMessage(message) { // eslint-disable-line
    const chat = await Chat.createOrUpdateFromTelegramChatDTO(message.chat);

    if (message.from) {
      const user = await User.createOrUpdateFromTelegramUserDTO(message.from);
      await chat.addUser(user);
    }

    return message;
  }
}


module.exports = UserChatMiddleware;
