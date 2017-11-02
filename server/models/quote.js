const Sequelize = require('Sequelize')
const db = require('../db')


const Quote = db.define('quote', {
  content: {
    type: Sequelize.STRING,
    allowNull: false
  },
  attribution: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Quote;
