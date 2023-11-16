import deployer from "./refs/deployer";

import Board from "./game/Board";


let notions = deployer();

let board = new Board(notions);


board.move("E2","E3")


console.log(board.simulateBoard())