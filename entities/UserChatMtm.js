const Entity = require('./Entity');
const models = require('../models');


class UserChatMtm extends Entity {
  static get modelClass() {
    return models.UserChatMtm;
  }

  static create(userId, chatId) {
    const model = UserChatMtm.modelClass.build({
      userId,
      chatId,
    });

    return new UserChatMtm(model);
  }
}


module.exports = UserChatMtm;
