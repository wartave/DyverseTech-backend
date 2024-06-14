
const { DataTypes} = require('sequelize');
const { sequelize} = require('../database/connect.js');

 const Route = sequelize.define('Route', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endTime: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  module.exports = {
    Route
  };