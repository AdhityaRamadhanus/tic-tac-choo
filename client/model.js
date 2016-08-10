const robot = require('./tictacbot')
module.exports = () => {
	return {
		state: {
			board: [ 
				['', '', ''],
				['', '', ''],
				['', '', '']
			]
		},
		reducers: {
			setSquare: (data, state) => {
				const newBoard = state.board.slice()
				if (newBoard[data.row][data.col] !== '') {
					//console.log('already there ' + data.row + ' ' + data.col)
					return state
				}
      	newBoard[data.row][data.col] = data.type
      	return {board: newBoard}
			}
		},
		effects: {
			computeMove: (data, state, send, done) => {
				send('setSquare', data, () => {
					var computerMove = robot(state.board)
					//console.log(JSON.stringify(state))
					//console.log(JSON.stringify(computerMove))
					send('setSquare', {type: 'o', row: computerMove.row, col: computerMove.col}, done)
				})
			}
		}
	}
}