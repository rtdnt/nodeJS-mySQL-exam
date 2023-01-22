const Sequelize = require('sequelize');
const db = require('../db');

const Bills = db.define('bills', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  group_id: {
    type: Sequelize.INTEGER,
    references: {
      model: 'groups',
      key: 'id'
    }
  },
  amount: {
    type: Sequelize.DECIMAL(10, 2)
  },
  description: {
    type: Sequelize.STRING
  }
});

module.exports = Bills;
