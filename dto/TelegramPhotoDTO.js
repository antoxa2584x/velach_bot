const DTO = require('./DTO');


class TelegramPhotoDTO extends DTO {
  get fileId() {
    return this.rawObject.file_id;
  }

  get width() {
    return this.rawObject.width;
  }

  get height() {
    return this.rawObject.height;
  }
}


module.exports = TelegramPhotoDTO;
