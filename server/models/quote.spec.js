/* Node Modules */
const chai = require('chai')
const expect = chai.expect
const should = chai.should()

/* Local Modules */
const db = require('../db')
const { Author, Quote } = require('./index')

describe('Quote', function() {
  let newQuote;

  beforeEach(async function() {
    await db
      .sync({force: true})
      .then(async () => {
        newQuote =
          await Quote.create(
            {text: 'What is this?', author: {name: 'Joshua'}},
            {include: Author}
          )
        return newQuote;
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
  it('should have categoryId property', function() {
    newQuote.dataValues.should.have.property('categoryId');
  })
})
