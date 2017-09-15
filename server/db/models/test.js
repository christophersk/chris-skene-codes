const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('test', {
  name: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
})
