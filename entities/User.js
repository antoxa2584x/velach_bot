const Entity = require('./Entity');
const models = require('../models');


class User extends Entity {
  static get modelClass() {
    return models.User;
  }

  static create(id, isBot, firstName, lastName, username) {
    const model = this.modelClass.build({
      id,
      isBot,
      firstName,
      lastName,
      username,
    });

    return new User(model);
  }
}


module.exports = User;
