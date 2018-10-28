const Application = require('../../infrastructure/Application');
const BikecheckRoute = require('./routes/BikecheckRoute/BikecheckRoute');


class VelachBotApp extends Application {
  static get routes() {
    return [
      BikecheckRoute,
    ];
  }
}


module.exports = VelachBotApp;
