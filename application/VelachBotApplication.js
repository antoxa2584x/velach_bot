const Application = require('./Application');
const DTOMiddleware = require('../middlewares/DTOMiddleware');
const UserChatMiddleware = require('../middlewares/UserChatMiddleware');
const CommandMiddleware = require('../middlewares/CommandMiddleware');


class VelachBotApplication extends Application {
  static get middlewares() {
    return [
      DTOMiddleware,
      UserChatMiddleware,
      CommandMiddleware,
    ];
  }
}

module.exports = VelachBotApplication;
