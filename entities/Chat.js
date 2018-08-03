const Entity = require('./Entity');
const models = require('../models');
const UserChatMtm = require('./UserChatMtm');


class Chat extends Entity {
  static get modelClass() {
    return models.Chat;
  }

  static create(id, type, title) {
    const model = Chat.modelClass.build({
      id,
      type,
      title,
    });

    return new Chat(model);
  }

  get id() {
    return this.model.id;
  }

  addUser(user) {
    const userChatMtm = UserChatMtm.create(user.id, this.id);
    return userChatMtm.save();
  }
}


module.exports = Chat;
