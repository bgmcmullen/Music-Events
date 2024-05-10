'use strict';

const eventsModel = (sequelize, DataTypes) => sequelize.define('Events', {
  name: { type: DataTypes.STRING, required: true },
  date:{ type: DataTypes.STRING, required: true},
  venue: { type: DataTypes.STRING, required: true }
});

module.exports = eventsModel;
