function checkTwo(state, isOpponent){
	// check Row
	var desiredState = (isOpponent) ? 'x' : 'o'
	for (var i=0;i<state.length;i++) {
		var rowState = state[i].slice()
		if (rowState.filter((e) => e === desiredState).length === 2 && rowState.some((e) => e === '')) {
			return {row: i, col: rowState.indexOf('')}
		}
	}
	// check col
	var colState = []
	for (var i=0;i<state.length;i++) {
		colState.push(state[i].slice())
		colState[i][0] = state[0][i]
		colState[i][1] = state[1][i]
		colState[i][2] = state[2][i]
		if (colState[i].filter((e) => e === desiredState).length === 2 && colState[i].some((e) => e === '')) {
			return {row: colState[i].indexOf(''), col: i}
		}
	}

	// check diagonal (left)
	var leftDiagonal = []
	var rightDiagonal = []
	for (var i=0;i<state.length;i++) {
		leftDiagonal.push(state[i][i])
		rightDiagonal.push(state[i][state.length-1-i])
	}
	if (leftDiagonal.filter((e) => e === desiredState).length === 2 && leftDiagonal.some((e) => e === '')) {
		return {row: leftDiagonal.indexOf(''), col: leftDiagonal.indexOf('')}
	}
	if (rightDiagonal.filter((e) => e === desiredState).length === 2 && rightDiagonal.some((e) => e === '')) {
		return {row: rightDiagonal.indexOf(''), col: rightDiagonal.length - 1 - rightDiagonal.indexOf('')}
	}
	return {row: -1, col: -1}
}

module.exports = (state) => {
	//console.log(state)
	// check two in a row opponent
	var humanThreat = checkTwo(state, false) 
	if (humanThreat.row !== -1){
		return humanThreat
	}

	var botThreat = checkTwo(state, true)
	if (botThreat.row !== -1){
		return botThreat
	}

	// BEZT MOVE
	if (state[1][1] === '') return {row: 1, col: 1}

	//just random
	var randomState = state.map((row, rowIdx) => {
		return row.map((col, colIdx) => ({type: col, row: rowIdx, col: colIdx}))
	})
	var flattenArray = [].concat.apply([], randomState).filter((e) => e.type === '')
	var selectedRowCol = flattenArray[Math.floor(Math.random() * flattenArray.length)]
	return {row: selectedRowCol.row, col: selectedRowCol.col}
}