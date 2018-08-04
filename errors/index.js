class NotImplementedError extends Error {
  constructor() {
    super('This is not yet implemented');
  }
}


class DoesntExistError extends Error {
  constructor() {
    super('Entity doesnt exist');
  }
}


exports.NotImplementedError = NotImplementedError;
exports.DoesntExistError = DoesntExistError;
