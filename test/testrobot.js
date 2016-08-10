'use strict'
var describe = require('mocha').describe
var it = require('mocha').it
require('should')
var ticbot = require('../client/tictacbot')


describe('Tic-tac-toe Bot', function () {
  it('Test on state 1', function (done) {
    var state = [ 
			['', '', ''],
			['', '', ''],
			['', '', '']
		]
		var computerMove = ticbot(state)
		computerMove.row.should.equal(1)
		computerMove.col.should.equal(1)
		done()
  })
})