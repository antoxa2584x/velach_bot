const Application = require('./Application');
const DTOMiddleware = require('../middlewares/DTOMiddleware');
const UserChatMiddleware = require('../middlewares/UserChatMiddleware');


class VelachBotApplication extends Application {
  static get middlewares() {
    return [
      DTOMiddleware,
      UserChatMiddleware,
    ];
  }
}

module.exports = VelachBotApplication;
