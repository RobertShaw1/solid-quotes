
const Sequelize = require('Sequelize')

const db = new Sequelize('postgres://user:pass@example.com:5432/quotes');

// force: true will drop the table if it already exists
db.sync({force: true}).then(() => {
  // Table created
  // return Quote.create({
  //   content: `“I want to change the world but they won’t give me the source code.”`,
  //   attribution: `-Source Obscure`,
  // });
  console.log('db synced!')
});

module.exports = db;