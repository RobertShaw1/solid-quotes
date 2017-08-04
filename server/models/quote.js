const Sequelize = require('Sequelize')
const db = require('../db')

const Quote = db.define('quote', {
  content: {
    type: Sequelize.STRING
  },
  attribution: {
    type: Sequelize.STRING
  }
});

module.exports = Quote;
