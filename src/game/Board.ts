import Notions from "../refs/notions";
import pieces from "../refs/pieces";

class ChessBoard {
    public pieces: Notion[];

    constructor(pieces: Notion[]) {
        this.pieces = pieces;
    }

    simulateBoard() {
        return this.pieces.map(piece => {
            if (Object.hasOwn(piece, "piece")) {
                if (piece.letter === "h") {
                    return piece?.piece?.charAt(0) + "\n"
                } else return piece?.piece?.charAt(0)
            } else {
                if (piece.letter === "h") return "\n"
            }
        }).join("")
    }

    movePiece(old_pos: Notion, new_pos: Notion) {
        console.log(old_pos)
        let old_index = this.pieces.findIndex(piece => piece.letter + piece.number === old_pos.letter + old_pos.number)
        let new_index = this.pieces.findIndex(piece => piece.letter + piece.number === new_pos.letter + new_pos.number)

        let old_ = this.pieces[old_index];
        let new_ = this.pieces[new_index]
        new_.piece = old_.piece;
        old_.piece = " ";

        this.pieces[old_index] = old_
        this.pieces[new_index] = new_;
    }

}




export default ChessBoard