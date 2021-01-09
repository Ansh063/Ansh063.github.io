var board = null
var newGame = new Chess()
<<<<<<< HEAD
=======
function onStart(source, piece, position, staus) {
    if(newGame.game_over() == true){
        return false;
    }var board = null
var newGame = new Chess()
>>>>>>> 1533e8313e30fe91da1a864afd3c76fe8b779f53

function onDragStart (source, piece, position, orientation) {
  if (newGame.game_over())
  {
    return false
  } 

  if (piece.search(/^b/) !== -1)
  { 
    return false
  }
<<<<<<< HEAD
=======
}

function makeRandomMove () {
  var possibleMoves = newGame.moves()

  if (possibleMoves.length === 0) return

  var randomIndex = Math.floor(Math.random() * possibleMoves.length)
  newGame.move(possibleMoves[randomIndex])
  board.position(newGame.fen())
}

function onDrop (source, target) {
  var move = newGame.move({
    from: source,
    to: target,
    promotion: 'q'
  })
  if (move === null) return 'snapback'
  window.setTimeout(makeRandomMove, 250)
}

function onSnapEnd () {
  board.position(newGame.fen())
}

var config = {
  draggable: true,
  position: 'start',
  onDragStart: onDragStart,
  onDrop: onDrop,
  onSnapEnd: onSnapEnd
}
board = Chessboard('myBoard', config)
    if(piece.search(/^b/) !== -1){
        return false;
    }
>>>>>>> 1533e8313e30fe91da1a864afd3c76fe8b779f53
}

function makeRandomMove () {
  var possibleMoves = newGame.moves()

  if (possibleMoves.length === 0) return

  var randomIndex = Math.floor(Math.random() * possibleMoves.length)
  newGame.move(possibleMoves[randomIndex])
  board.position(newGame.fen())
}

function onDrop (source, target) {
  var move = newGame.move({
    from: source,
    to: target,
    promotion: 'q'
  })
  if (move === null) return 'snapback'
  window.setTimeout(makeRandomMove, 250)
}

function onSnapEnd () {
  board.position(newGame.fen())
}

var config = {
  draggable: true,
  position: 'start',
  onDragStart: onDragStart,
  onDrop: onDrop,
  onSnapEnd: onSnapEnd
}
<<<<<<< HEAD
board = Chessboard('myBoard', config)
=======
board = Chessboard(myboard,config);
>>>>>>> 1533e8313e30fe91da1a864afd3c76fe8b779f53
