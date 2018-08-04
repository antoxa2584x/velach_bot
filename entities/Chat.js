const Entity = require('./Entity');
const models = require('../models');
const UserChatMtm = require('./UserChatMtm');


class Chat extends Entity {
  static get modelClass() {
    return models.Chat;
  }

  static async create(id, type, title) {
    const model = await this.modelClass.create({
      id,
      type,
      title,
    });

    return new this(model);
  }

  static async createOrUpdate(id, type, title) {
    const [model] = await Chat.modelClass.upsert(
      {
        id,
        type,
        title,
      },
      {
        returning: true,
      },
    );

    return new this(model);
  }

  static createOrUpdateFromTelegramChatDTO(dto) {
    return Chat.createOrUpdate(
      dto.id,
      dto.type,
      dto.title,
    );
  }

  get id() {
    return this.model.id;
  }

  addUser(user) {
    console.log(user.id);
    console.log(this.id);
    return UserChatMtm.create(user.id, this.id);
  }
}


module.exports = Chat;
