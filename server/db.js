'use strict'

const debug = require('debug')('sql');
const chalk = require('chalk');
const Sequelize = require('sequelize');
const dbName = require('../package.json').name;

let connectionString;

if (process.env.TESTING) {
  console.log(chalk.magenta('\n In test environment...'));
  connectionString = `postgres://localhost:5432/${dbName}-test`;
} else {
  connectionString = process.env.DATABASE_connectionString || `postgres://localhost:5432/${dbName}`;
}

console.log(chalk.yellow(`\nOpening database connection to ${connectionString}\n`));

// create the database instance that can be used in other database files
const db = new Sequelize(connectionString, {
  operatorsAliases: false,
  logging: debug, // export DEBUG=sql in the environment to get SQL queries
  native: true, /* lets Sequelize know we can use pg-native for ~30% more speed
  (this may cause problems so take it out if necessary) */
});

module.exports = db;
