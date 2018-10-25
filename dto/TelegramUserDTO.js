const DTO = require('../infrastructure/DTO');


class TelegramUserDTO extends DTO {
  get id() {
    return this.rawObject.id;
  }

  get isBot() {
    return this.rawObject.is_bot;
  }

  get firstName() {
    return this.rawObject.first_name;
  }

  get lastName() {
    return this.rawObject.last_name;
  }

  get username() {
    return this.rawObject.username;
  }
}


module.exports = TelegramUserDTO;
