const Sequelize = require('Sequelize')
const db = require('../db')

const Category = db.define('category', {
  name: {
    type: Sequelize.STRING
  },
});

module.exports = Category;
