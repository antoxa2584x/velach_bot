const Application = require('./Application');
const LogMiddleware = require('../middlewares/LogMiddleware');


class VelachBotApplication extends Application {
  static get middlewares() {
    return [
      LogMiddleware,
    ];
  }
}

module.exports = VelachBotApplication;
