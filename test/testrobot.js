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
  it('Test on state 2', function (done) {
    var state = [ 
			['o', 'o', 'o'],
			['o', 'o', 'o'],
			['o', 'o', 'o']
		]
		var computerMove = ticbot(state)
		computerMove.row.should.equal(-1)
		computerMove.col.should.equal(-1)
		done()
  })
  it('Test on state 3', function (done) {
    var state = [ 
			['x', 'x', ''],
			['', '', ''],
			['', '', '']
		]
		var computerMove = ticbot(state)
		computerMove.row.should.equal(0)
		computerMove.col.should.equal(2)
		done()
  })
  it('Test on state 4', function (done) {
    var state = [ 
			['x', '', ''],
			['', '', ''],
			['', '', 'x']
		]
		var computerMove = ticbot(state)
		computerMove.row.should.equal(1)
		computerMove.col.should.equal(1)
		done()
  })
  it('Test on state 5', function (done) {
    var state = [ 
			['', '', ''],
			['', 'x', ''],
			['', 'x', '']
		]
		var computerMove = ticbot(state)
		computerMove.row.should.equal(0)
		computerMove.col.should.equal(1)
		done()
  })
  it('Test on state 6', function (done) {
    var state = [ 
			['x', 'x', 'o'],
			['', '', 'o'],
			['', '', '']
		]
		var computerMove = ticbot(state)
		computerMove.row.should.equal(2)
		computerMove.col.should.equal(2)
		done()
  })
  it('Test on state 7', function (done) {
    var state = [ 
			['x', '', ''],
			['', 'o', ''],
			['o', '', 'x']
		]
		var computerMove = ticbot(state)
		computerMove.row.should.equal(0)
		computerMove.col.should.equal(2)
		done()
  })
  it('Test on state 8', function (done) {
    var state = [ 
			['', 'o', 'o'],
			['', 'x', ''],
			['', 'x', '']
		]
		var computerMove = ticbot(state)
		computerMove.row.should.equal(0)
		computerMove.col.should.equal(0)
		done()
  })
})