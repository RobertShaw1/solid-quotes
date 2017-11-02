
const Sequelize = require('Sequelize')

let db = new Sequelize('postgres://localhost:5432/quotes');

// force: true will drop the table if it already exists
let options = {};
if (process.env.SEEDING === "true") {
  options = Object.assign({}, {force: true})
}

db.sync(options).then(() => {
  // Table created
  // return Quote.create({
  //   content: `“I want to change the world but they won’t give me the source code.”`,
  //   attribution: `-Source Obscure`,
  // });
  console.log('db synced!')
});

module.exports = db;