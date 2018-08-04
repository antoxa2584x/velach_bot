const DTO = require('./DTO');
const TelegramUserDTO = require('./TelegramUserDTO');
const TelegramChatDTO = require('./TelegramChatDTO');


class TelegramMessageDTO extends DTO {
  get messageId() {
    return this.rawMessageObject.message_id;
  }

  get from() {
    if (!this.rawObject.from) {
      return null;
    }

    return new TelegramUserDTO(this.rawObject.from);
  }

  get date() {
    return this.rawObject.date;
  }

  get chat() {
    return new TelegramChatDTO(this.rawObject.chat);
  }

  get replyToMessage() {
    return new TelegramMessageDTO(this.rawObject.reply_to_message);
  }

  get text() {
    return this.rawObject.text ? this.rawObject.text : null;
  }
}


module.exports = TelegramMessageDTO;
