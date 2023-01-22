const Sequelize = require('sequelize');
const db = require('../db');

const Groups = db.define('usergroups', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  }
});

module.exports = Groups;
