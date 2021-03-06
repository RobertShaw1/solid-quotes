'use strict';

// Require all the models
/*
  Running each model (i.e. table) module (i.e. file)
  registers each model into our sequelize db so any other part of the application
  could call db.model('user') OR db.models.user to get access to the `user` model.
  This works if we all use the same Sequelize instance
  (instantiated in and exported from `/db/index.js`)
  This is an acceptable pattern but it does have limitations
  in that if you change the name of the model
  you will have to change it in every module that requires it
*/

const Author = require('./author');
const Category = require('./category');
const Quote = require('./quote');

// http://docs.sequelizejs.com/manual/tutorial/associations.html
/* Add associations here */
Quote.belongsTo(Author);
Quote.belongsTo(Category);
Author.hasMany(Quote);
Category.hasMany(Quote);

module.exports = {
  Author,
  Category,
  Quote,
};
