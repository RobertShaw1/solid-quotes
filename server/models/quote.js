const Sequelize = require('Sequelize')
const db = require('../db')


const Quote = db.define('quote', {
  text: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  likes: {
    type: Sequelize.INTEGER,
  },
  shares: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Quote;
