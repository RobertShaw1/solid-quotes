const Sequelize = require('Sequelize')
const db = require('../db')

const Author = db.define('author', {
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = Author;
