
class ChessBoard {
    public pieces: Notion[];

    constructor(pieces: Notion[]) {
        this.pieces = pieces;
    }

    simulateBoard() {
        return this.pieces.join(" ")
    }


}

export default ChessBoard