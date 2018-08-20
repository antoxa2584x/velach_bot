const Entity = require('./Entity');
const models = require('../models');


class User extends Entity {
  static get modelClass() {
    return models.User;
  }

  static async create(id, isBot, firstName, lastName, username) {
    const model = await this.modelClass.create({
      id,
      isBot,
      firstName,
      lastName,
      username,
    });

    return new this(model);
  }

  static async createOrUpdate(id, isBot, firstName, lastName, username) {
    const [model] = await this.modelClass.upsert(
      {
        id,
        isBot,
        firstName,
        lastName,
        username,
      },
      {
        returning: true,
      },
    );

    return new this(model);
  }

  static createOrUpdateFromTelegramUserDTO(dto) {
    return User.createOrUpdate(
      dto.id,
      dto.isBot,
      dto.firstName,
      dto.lastName,
      dto.username,
    );
  }

  get id() {
    return this.model.id;
  }

  getActiveBikecheck() {
    return models.Bikecheck.findOne({
      userId: this.model.id,
      isActive: true,
    });
  }
}


module.exports = User;
