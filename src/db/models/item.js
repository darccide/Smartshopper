"use strict";
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define(
    "Item",
    {
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      purchased: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      listId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  );
  Item.associate = function(models) {
    Item.belongsTo(models.List, {
      foreignKey: "listId",
      onDelete: "CASCADE"
    });
  };
  return Item;
};
