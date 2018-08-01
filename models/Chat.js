module.exports = (sequelize, DataTypes) => sequelize.define(
  'Chat',
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
    },
  },
  {
    associate: () => {},
  },
);
