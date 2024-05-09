'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const eventsModel = require('./events/model.js');
const Collection = require('./data-collection.js');

const environment = process.env.NODE_ENV;
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';
const testOrProduction = (environment === 'test' || environment === 'production');

const sequelize = new Sequelize(DATABASE_URL, testOrProduction ? {logging: false} : {});
const events = eventsModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  events: new Collection(events),
};
