/* Node Modules */
const chai = require('chai')
const expect = chai.expect
const should = chai.should()

/* Local Modules */
const db = require('../db')
const { Quote } = require('./index')

describe('Quote', function() {
  let newQuote;

  beforeEach(async function() {
    await db
      .sync({force: true})
      .then(async () => {
        newQuote = await Quote.create({content: 'What is this?', attribution: 'Joshua'})
        return newQuote;
      })
  })

  it('Quote should have content', function() {
    expect(newQuote.content).to.equal('What is this?')
  })
  it('Quote should have authorId property', function() {
    newQuote.dataValues.should.have.property('authorId');
  })
})
