const Route = require('../../../../infrastructure/Route');
const BikecheckHandler = require('./BikecheckHandler');


class BikecheckRoute extends Route {
  static get middlewareClsList() {
    return [];
  }

  static get HandlerCls() {
    return BikecheckHandler;
  }

  isMatching(messageData) {
    if (!messageData.text) {
      return false;
    }

    return messageData.text === `/bikecheck@${this.bot.info.username}`;
  }
}


module.exports = BikecheckRoute;
