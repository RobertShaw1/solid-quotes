/* Node Modules */
const chai = require('chai')
const expect = chai.expect
const should = chai.should()

/* Local Modules */
const db = require('../db')
const { Author, Quote } = require('./index')

describe('Quote', function() {
  let newQuote, oldQuote;

  beforeEach(async function() {
    await db
      .sync({force: true})
      .then(async () => {
        const entry1 = {text: 'What is this?', author: {name: 'Joshua'}};
        newQuote = await createQuote(entry1);
        return newQuote;
      })
      .then(async () => {
        const entry2 = {text: 'Borrring!', author: {name: 'Joshua'}};
        oldQuote = await createQuote(entry2);
        return oldQuote;
      })
  })

  it('requires text', async function() {
    try {
      const badQuote = await Quote.create({attribution: 'Joshua'});
      expect.fail()
    } catch (error) {
      expect(error.name).to.be.equal('SequelizeValidationError')
      expect(error.errors[0].type).to.be.equal('notNull Violation')
    }
  })
  it('should have authorId property', function() {
    newQuote.dataValues.should.have.property('authorId');
  })
  it('should eagerly load author', async function() {
    const sampleQuote =
      await Quote.findAll({
        where: {id: 1},
        include: [{ all: true }],
      })

    // console.log('sampleQuote[0]: ', sampleQuote[0])
    sampleQuote[0].should.have.property('author')
  })
})


function createQuote(quote) {
  return Author
    .findOrCreate({ where: { name: quote.author.name }})
    .spread((author, created) => author)
    .then(author => (
      Quote
        .create(quote)
        .then(quote => quote.setAuthor(author))
    ))
}
