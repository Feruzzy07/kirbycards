'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PlayerCards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PlayerCards.init({
    player_id:{
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    card_id:{
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'PlayerCards',
    tableName: 'player_cards',
    timestamps: false
  });
  return PlayerCards;
};