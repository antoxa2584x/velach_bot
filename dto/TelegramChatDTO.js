const DTO = require('../infrastructure/DTO');


class TelegramChatDTO extends DTO {
  get id() {
    return this.rawObject.id;
  }

  get type() {
    return this.rawObject.type;
  }

  get title() {
    return this.rawObject.title ? this.rawObject.title : null;
  }
}


module.exports = TelegramChatDTO;
