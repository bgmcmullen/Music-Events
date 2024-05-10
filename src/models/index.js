'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const eventsModel = require('./events/model.js');
const userModel = require('../auth/models/users.js');
const Collection = require('./data-collection.js');

const environment = process.env.NODE_ENV;
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const sequelize = new Sequelize(DATABASE_URL, {logging:false});

// const event = eventsModel(sequelize, DataTypes);


module.exports = {
  db: sequelize,
  users: userModel(sequelize, DataTypes),
 events: eventsModel(sequelize, DataTypes)
};