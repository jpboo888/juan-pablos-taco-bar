const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Order extends Model{}
Order.init(
    {
        // define an id column
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        // define a username column
        price: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
       // define an email column
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: false,
        },
        // define a password column
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        }
      },
      { sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'order'
      }
    );
      
    //exports the module
    module.exports = Order;
