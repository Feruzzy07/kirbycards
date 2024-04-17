'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Deck.belongsToMany(models.Card,{
        through: 'deck_cards',
        as: 'cards',
        foreignKey: 'deck_id',
        otherKey: 'card_id',
        timestamps: false
      })
    }
  }
  Deck.init({
    name: DataTypes.STRING,
    soul: DataTypes.STRING,
    owner_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Deck',
    timestamps: false,
    tableName: 'decks'
  });
  return Deck;
};