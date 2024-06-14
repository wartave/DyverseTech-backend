const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('dyversetech_db', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

// Define Route model
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

// Define Location model
const Location = sequelize.define('Location', {
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false
  },
  routeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Route,
      key: 'id'
    }
  }
});

// Define associations
Route.hasMany(Location, { foreignKey: 'routeId' });
Location.belongsTo(Route, { foreignKey: 'routeId' });

// Sync models with database
const syncDatabase = async () => {
  await sequelize.sync({ force: true }); // Use force: true to drop and re-create tables for testing
  console.log("Database synced");
}

syncDatabase();

module.exports = {
  sequelize,
  Route,
  Location
};
