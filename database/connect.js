const { Sequelize} = require('sequelize');

 const sequelize = new Sequelize('dyversetech_db','root','',{
    host:'localhost',
    dialect:'mysql'
});

module.exports = {
    sequelize
  };