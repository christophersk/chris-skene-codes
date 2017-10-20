const Sequelize = require('sequelize');
const db = require('../db');

export default db.define('test', {
  name: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
})
