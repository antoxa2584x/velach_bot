const Service = require('./Service');
const models = require('../models');
const Bikecheck = require('../entities/Bikecheck');


class BikecheckService extends Service {
  async setActiveBikecheck(userId, telegramImageId) { // eslint-disable-line
    const currentActiveBikecheck = await models.Bikecheck.findOne({
      userId,
      isActive: true,
    });

    if (currentActiveBikecheck) {
      currentActiveBikecheck.isActive = false;
      await currentActiveBikecheck.save();
    }

    await Bikecheck.create(userId, telegramImageId);
  }
}


module.exports = BikecheckService;
