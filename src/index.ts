import board from "./game/Board";
import pieces from "./refs/pieces";

let default_board = new board(pieces);
default_board.movePiece({letter : "e",number : 2},{letter : "e",number : 4})
default_board.movePiece({letter : "d",number : 2},{letter : "d",number : 4})

console.log(default_board.simulateBoard())