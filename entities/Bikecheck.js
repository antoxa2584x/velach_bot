const Entity = require('./Entity');
const models = require('../models');


class Bikecheck extends Entity {
  static get modelClass() {
    return models.Bikecheck;
  }

  static create(userId, telegramImageId) {
    const model = models.Bikecheck.create({
      userId,
      telegramImageId,
    });

    return new Bikecheck(model);
  }
}


module.exports = Bikecheck;
