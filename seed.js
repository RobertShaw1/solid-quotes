
const db = require('./server/db');
const { Quote } = require('./server/models');
const quoteData = require('./quoteData');

async function insertQuotes(data) {
  try {
    await Promise.all(data.map(quote => {
      return Quote.create(
        quote,
        // {
        //   include: [Category],
        // }
      )
    }))
    console.log('Finished Seeding!\n');
    const allQuotes = await Quote.findAndCountAll();
    console.log(`🎉  ${allQuotes.count} quotes seeded 🎉\n`);
  } catch (error) {
    console.log(`
    \n*************************\n!!!ERROR WHILE SEEDING!!!\n*************************
    `);
    console.error(error.stack, '\n');
    return error;
  }
}

function seed() {
  return insertQuotes(quoteData)
}

const main = async () => {
  try {
    console.log('Syncing db...');
    await db.sync({ force: true })

    console.log('Seeding database...');
    await seed();

  } catch (error) {
    console.error(error.stack, '\n');
    return error;
  }
  db.close();
  return null;
};

main();
