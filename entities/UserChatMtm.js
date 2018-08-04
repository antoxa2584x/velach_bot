const Entity = require('./Entity');
const models = require('../models');


class UserChatMtm extends Entity {
  static get modelClass() {
    return models.UserChatMtm;
  }

  static async create(userId, chatId) {
    const model = await UserChatMtm.modelClass.create({
      userId,
      chatId,
    });

    return new this(model);
  }

  static async createOrUpdate(userId, chatId) {
    const [model] = await this.modelClass.upsert(
      {
        userId,
        chatId,
      },
      {
        returning: true,
      },
    );

    return new this(model);
  }
}


module.exports = UserChatMtm;
