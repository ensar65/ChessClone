
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
        let old_index = this.pieces.findIndex(piece => piece.letter + piece.number === old_pos.letter + old_pos.number)
        let new_index = this.pieces.findIndex(piece => piece.letter + piece.number === new_pos.letter + new_pos.number)

        let old_ = this.pieces[old_index];
        let new_ = this.pieces[new_index]
        if(!illegalMoveAnalyzer(old_,new_)) return console.log("Illegal move.")

        new_.piece = old_.piece;
        old_.piece = "Blank";

        this.pieces[old_index] = old_
        this.pieces[new_index] = new_;
    }

}

function illegalMoveAnalyzer(old_pos: Notion, new_pos: Notion) {

    if(old_pos.piece === "Pawn") {
        if(new_pos.piece !== "Blank") { //Trying to eat some pieces.


        } else {
            if(old_pos.letter !== new_pos.letter) return false;
            let possible_upgrade = 1; //If piece is natural can upgrade 2 square.
            console.log(old_pos)
            if(old_pos.natural) possible_upgrade += 1;
            console.log(possible_upgrade)

            if(new_pos.number > old_pos.number + possible_upgrade) return false; //Illegal upgrade.
            console.log(old_pos.number,possible_upgrade)
            return true;
        }
    }
}


export default ChessBoard