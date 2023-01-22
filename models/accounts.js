const Sequelize = require('sequelize');
const db = require('../db');

const Accounts = db.define('accounts', {
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
  user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    }
  }
});

module.exports = Accounts;
