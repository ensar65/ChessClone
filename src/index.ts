import deployer from "./refs/deployer";
import Board from "./game/Board";


import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let notions = deployer();
let board = new Board(notions);
recursiveBoard(board);


function recursiveBoard(b : Board) {
    console.log(b.simulateBoard());
    rl.question("Whats your move ? (E2 to E3) :", answer => {

       let answers = answer.split("to").map(a => a.trim());
       if(answers.length < 2 ) return recursiveBoard(b);
       let n1 = answers[0];
       let n2 = answers[1];
       b.move(n1,n2);
       recursiveBoard(b);
    });
}