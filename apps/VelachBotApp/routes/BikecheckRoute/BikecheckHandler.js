const Handler = require('../../../../infrastructure/Handler');


class BikecheckHandler extends Handler {
  async handleMessage(messageData) {
    await this.bot.sendMessage(messageData.chat.id, 'puk');
  }
}


module.exports = BikecheckHandler;
