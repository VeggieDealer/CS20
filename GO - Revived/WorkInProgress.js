var player1 {
	turn: 0,
	captured: [
	//array of arrays ([x,y]) containing position of pieces on board. 
	]
}

var player2 {
	turn: 0,
	captured: []
}

whenMouseClicked {
	if (player1.turn === 1) {
			capturePosition(mouse.x, mouse.y, player1) 
			checkTerritory()
	}

	if (player2.turn === 1) {
		
	}
}

function capturePosition (x, y, player) {
	if (player1.captured.indexOf(getBoardPosition(x, y)) === -1 & player2.captured.indexOf(getBoardPosition(x, y)) === -1) {
		player.captured.push([board(x), board(y)])
	}
}

function checkTerritory ()

function board (n) {
	return(//equation which rounds mouse coords to board position)
}