'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Player.belongsToMany(models.Card, {
        through: 'player_cards',
        as: 'cards',
        foreignKey: 'player_id',
        otherKey: 'card_id',
        timestamps: false
      })

      Player.hasMany(models.Deck, {
        foreignKey: 'owner_id',
        as: 'decks'
      })
    }
  };
  Player.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Player',
    timestamps: false,
    tableName: 'players'
  });
  return Player;
};