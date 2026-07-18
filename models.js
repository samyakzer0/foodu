const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Booking = sequelize.define('Booking', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  restaurant: {
    type: DataTypes.STRING,
    allowNull: false
  },
  table_no: {
    type: DataTypes.STRING,
    allowNull: false
  },
  time_slot: {
    type: DataTypes.STRING,
    allowNull: false
  },
  deposit_amount: {
    type: DataTypes.STRING,
    allowNull: false
  },
  upi_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'Confirmed'
  },
  email: {
    type:DataTypes.STRING,
    allowNull:false,
  
  }
});


module.exports = { sequelize, Booking };
