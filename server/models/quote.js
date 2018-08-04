const Sequelize = require('Sequelize')
const db = require('../db')
const Author = require('./author')


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

/**
 * need a beforeCreate hook to set author
 * This will prevent quotes from being created without an author
 */
