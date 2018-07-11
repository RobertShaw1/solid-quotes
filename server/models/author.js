const Sequelize = require('Sequelize')
const db = require('../db')

const Author = db.define('author', {
  name: {
    type: Sequelize.STRING,
    unique: true,
  },
});

module.exports = Author;
