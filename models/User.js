module.exports = (sequelize, DataTypes) => sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    isBot: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
  },
  {
    associate: () => {},
  },
);
