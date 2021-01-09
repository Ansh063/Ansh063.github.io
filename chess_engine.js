const { Chess } = require("chess.js")

var board = null
var newGame = new Chess()
function onStart(source, piece, position, staus) {
    if(newGame.game_over() == true){
        return false;
    }var board = null
var newGame = new Chess()

function onDragStart (source, piece, position, orientation) {
  if (newGame.game_over())
  {
    return false
  } 

  if (piece.search(/^b/) !== -1)
  { 
    return false
  }
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
}
function randomMoves() {
   var possibleMovements = newGame.moves()
   if(possibleMovements.length() == 0){
       return;
   }
   var randomIndex = Math.floor(Math.random() * possibleMovements.length);
   newGame.move(possibleMovements[randomIndex]);
   board.position(newGame.fen());

}

function moveFromSource(source,destination) {
    var newMove = newGame.move({
        to : destination,
        from : source ,
        promotion : 'q'
    });  
    if(newMove == null){
        return 'snapback';
    }
    window.setTimeout(randomMoves, 250)
}
function updateBoard() {
    board.position(newGame.fen())
}
var config = {
    draggable : true,
    position : 'start',
    onDragStart : onStart,
    onDragMove : moveFromSource,
    onSnapEnd : updateBoard
}
board = Chessboard(myboard,config);
