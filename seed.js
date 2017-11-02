
const db = require('./server/db');
const Quote = require('./server/models/quote');
const quoteData = require('./quoteData');

function seedQuotes() {
  return Quote.bulkCreate(quoteData)
    .catch(err => {
    console.log('***error log***')
    console.error(err);
  })
}

//this is the code to use when importing a synced db
// db.then(seedQuotes)
// .then(() => {
//   db.close();
// })

// this is the code to use when importing an unsynced db
db.sync({force: true}).then(seedQuotes)
.then(() => {
  db.close();
})
