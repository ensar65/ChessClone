import Board from "../Board";
import ChessBoard from "../Board";

class Pawn {
    private notion: Notion;

    constructor(notion: Notion) {
        this.notion = notion;
    }


    illegalPawnMoveCheck(move: Notion, board: ChessBoard) {
        let pieces = board.pieces;

        let old_index = pieces.findIndex(piece => piece.letter + piece.number === this.notion.letter + this.notion.number)
        let new_index = pieces.findIndex(piece => piece.letter + piece.number === move.letter + move.number)

        let old_ = pieces[old_index];
        let new_ = pieces[new_index];
        if (this.notion.piece !== "Pawn") return false;
        if (move.piece !== "Blank") { //Trying to eat some pieces.


        } else {
            if (this.notion.letter !== move.letter) return false;
            let possible_upgrade = 1; //If piece is natural can upgrade 2 square.
            if (this.notion.natural) possible_upgrade += 1;

            if (move.number > this.notion.number + possible_upgrade) return false; //Illegal upgrade.
            return true;
        }
    }

}

export default Pawn