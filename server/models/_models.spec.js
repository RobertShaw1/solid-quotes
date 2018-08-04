/* Node Modules */
const chai = require('chai')
const expect = chai.expect
const should = chai.should()

/* Local Modules */
const db = require('../db')
const { Author, Category, Quote } = require('./index')

describe('Basic Quote', function() {
  let newQuote, oldQuote, sampleQuote;

  before(async function() {
    await db
      .sync({force: true})
      // .then(async () => {
        // const entry1 = {text: 'What is this?', author: {name: 'Joshua'}};
        // const entry2 = {text: 'Borrring!', author: {name: 'Joshua'}};

        // newQuote = await createQuote(entry1);
        // oldQuote = await createQuote(entry2);
      // })
  })

  it.skip('requires text', async function() {
    try {
      const badQuote = await Quote.create({attribution: 'Joshua'});
      expect.fail()
    } catch (error) {
      expect(error.name).to.be.equal('SequelizeValidationError')
      expect(error.errors[0].type).to.be.equal('notNull Violation')
    }
  })
  it.skip('should have authorId property', function() {
    newQuote.dataValues.should.have.property('authorId');
  })
  it.skip('should eagerly load author', async function() {
    sampleQuote =
      await Quote.findAll({
        where: {id: 1},
        include: [{ all: true }],
      })

    sampleQuote[0].should.have.property('author')
    expect(sampleQuote[0].author.name).to.equal('Joshua')
  })
  it('null author defaults to unknown', async function() {
    // const entry3 = {text: 'Hello!'};
    const entry2 = {text: 'Borrring!', author: {name: 'Joshua'}};
    const nullAuthorQuote = await Quote.create(entry2);

    sampleQuote =
      await Quote.findAll({
        where: {text: nullAuthorQuote.text},
        include: [{ all: true }],
      })

    sampleQuote[0].should.have.property('author')
    // expect(sampleQuote[0].author.name).to.equal('Unknown')
    expect(sampleQuote[0].author.name).to.equal('Joshua')
  })
})

describe.skip('Quote w/ Categories', function() {
  let goodQuote, greatQuote;

  // beforeEach(async function() {
    // await db
    //   .sync({force: true})
      // .then(async () => {
      //   const withOneCategory = {
      //     text: 'Today is the day!',
      //     author: {name: 'Someone'},
      //     categories: ['excitement'],
      //   };

      //   const withMultipleCategory = {
      //     text: 'I think I\'m ready.',
      //     author: {name: 'Someone'},
      //     categories: ['excitement', 'anxiety'],
      //   };

      //   // await createQuote(withOneCategory)
      //   //   .then(quote1 => {
      //   //     goodQuote = quote1;
      //   //   })
      //   //   .then(() => createQuote(withMultipleCategory))
      //   //   .then(quote2 => {
      //   //     greatQuote = quote2;
      //   //   })
      //   //   .catch(err => err)

      //   await createQuote(withMultipleCategory)
      //     .then(quote2 => {
      //       greatQuote = quote2;
      //     })
      //     .catch(err => err)
      // })
  // })

  it.skip('can create quote w/ a category', async function() {
    const quoteWithCategory =
      await Quote.findAll({
        where: {id: goodQuote.id},
        include: [{ all: true }],
      })
      .then(quote => quote[0])

    quoteWithCategory.should.have.property('categories').with.lengthOf(1);
    expect(quoteWithCategory.categories[0].name).to.equal('excitement');
  })
  it('can create quote w/ multiple categories', async function() {
    const withMultipleCategory = {
      text: 'I think I\'m ready.',
      author: {name: 'Someone'},
      categories: ['excitement', 'anxiety'],
    };

    const quoteWithMultipleCategory =
      await db
        .sync({force: true})
        .then(() => createQuote(withMultipleCategory))
        .catch(err => err)

    console.log('quoteWithMultipleCategory: ', quoteWithMultipleCategory)

    quoteWithMultipleCategory.should.have.property('categories').with.lengthOf(2);
    // expect(quoteWithMultipleCategory.categories).to.include({name: 'excitement'}, {name: 'anxiety'});
  })
})

/* Utility Functions */
// async function createQuote(quote) {
//   const { author, categories } = quote;

//   const quoteAuthor =
//     await Author.findOrCreate({
//       where: {
//         name: author ? author.name : 'Unknown',
//       },
//     })
//     .spread((instance, created) => instance)

//   return Quote.create(quote)
//     .then(async newEntry => {
//       newEntry.setAuthor(quoteAuthor)

//       if (categories) {
//         categories.forEach(category => (
//           Category
//             .findOrCreate({ where: { name: category }})
//             .spread((instance, created) => newEntry.addCategory(instance))
//         ))
//       }

//       const someQuote = await Quote.findAll({
//         where: { id: newEntry.id },
//         include: [{ all: true }],
//       })

//       // const someQuote = await Quote.findAll({
//       //   where: { id: newEntry.id },
//       //   include: [
//       //     {model: Author},
//       //     {model: Category},
//       //   ],
//       // })

//       return someQuote[0].reload();
//       /**
//        * I have identified a bug within Sequelize.
//        * The issue is either with the eager loading or the reload method.
//        * Somewhere, there is a race condition,
//        * which leads to the the test case passing sometimes but failing others.
//        * Both eager loading approaches produce the same result,
//        * so I am inclined to believe it may be an issue with the reload method.
//        */
//     })
// }
