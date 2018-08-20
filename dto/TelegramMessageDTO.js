const DTO = require('./DTO');
const TelegramUserDTO = require('./TelegramUserDTO');
const TelegramChatDTO = require('./TelegramChatDTO');
const TelegramMessageEntityDTO = require('./TelegramMessageEntityDTO');
const TelegramPhotoDTO = require('./TelegramPhotoDTO');


class TelegramMessageDTO extends DTO {
  get messageId() {
    return this.rawObject.message_id;
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

  hasEntities() {
    return Boolean(this.rawObject.entities);
  }

  get entities() {
    return this.rawObject.entities
      ? this.rawObject.entities.map(e => new TelegramMessageEntityDTO(e, this.text))
      : [];
  }

  get photo() {
    if (this.rawObject.photo) {
      return null;
    }

    const sortedPhotos = this.rawObject.photo.sort((a, b) => {
      if (a.width < b.width) {
        return -1;
      }

      if (a.width > b.width) {
        return 1;
      }

      return 0;
    });

    return new TelegramPhotoDTO(sortedPhotos[0]);
  }
}


module.exports = TelegramMessageDTO;
