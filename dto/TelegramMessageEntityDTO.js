const DTO = require('./DTO');


class TelegramMessageEntityDTO extends DTO {
  constructor(entity, messageText) {
    super();
    this.entity = entity;
    this.messageText = messageText;
  }

  isCommand() {
    return this.entity.type === 'bot_command';
  }

  getCommand() {
    if (!this.isCommand()) {
      throw new Error('not a command entity');
    }

    return this.messageText.substr(this.entity.offset, this.entity.length);
  }
}


module.exports = TelegramMessageEntityDTO;
