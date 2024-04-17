'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Card.belongsToMany(models.Player, {
        through: 'player_cards',
        as: 'players',
        foreignKey: 'card_id',
        otherKey: 'player_id',
        timestamps: false
      })

      Card.belongsToMany(models.Deck, {
        through: 'deck_cards',
        as: 'decks',
        foreignKey: 'card_id',
        otherKey: 'deck_id',
        timestamps: false
      })
    }
  };
  Card.init({
    name: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    cardimg: DataTypes.STRING,
    stat1img: DataTypes.STRING,
    stat2img: DataTypes.STRING,
    stat3img: DataTypes.STRING,
    tribe1img: DataTypes.STRING,
    tribe2img: DataTypes.STRING,
    description: DataTypes.STRING,
    dmg: DataTypes.INTEGER,
    rarityimg: DataTypes.STRING,
    hp: DataTypes.INTEGER,
    rarity: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Card',
    tableName: 'cards',
    timestamps:false
  });
  return Card;
};