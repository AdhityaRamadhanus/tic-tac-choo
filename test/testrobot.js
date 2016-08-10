var ticbot = require('../client/tictacbot')

var emptyState = [ 
	['', '', ''],
	['', '', ''],
	['', '', '']
]
var testState1 = [ 
	['', '', ''],
	['', 'o', ''],
	['', 'x', '']
]
var testState2 = [ 
	['', '', ''],
	['x', 'o', 'o'],
	['', 'x', '']
]


console.log(ticbot(emptyState))
console.log(ticbot(testState1))
console.log(ticbot(testState2))