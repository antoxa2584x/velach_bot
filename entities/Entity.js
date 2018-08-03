const { NotImplementedError } = require('../errors');


class Entity {
  static get modelClass() {
    throw new NotImplementedError();
  }

  static async initFromDb(id) {
    const model = await this.modelClass.findOne(id);
    return this(model);
  }

  constructor(model) {
    this.model = model;
  }

  save() {
    return this.model.save();
  }
}

module.exports = Entity;
