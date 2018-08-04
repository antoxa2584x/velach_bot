const { NotImplementedError } = require('../errors');


class Entity {
  static get modelClass() {
    throw new NotImplementedError();
  }

  constructor(model) {
    this.model = model;
  }
}

module.exports = Entity;
