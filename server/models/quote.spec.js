const assert = require('chai').assert
const db = require('../db')
const { Quote } = require('./index')

describe('Quote', function() {
  afterEach(function() {
    db.sync({force: true});
  })

  it('Quote should have content', function() {
      Quote
        .create({content: 'What is this?', attribution: 'Joshua'})
        .then(newQuote => assert.equal(newQuote.content, 'What is this?'))
  })
})
