import board from "./game/Board";
import pieces from "./refs/pieces";

let default_board = new board(pieces);
default_board.movePiece({letter : "e",number : 2},{letter : "e",number : 4})

console.log(default_board.simulateBoard())