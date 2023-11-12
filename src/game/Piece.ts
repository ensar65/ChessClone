import settings from "../config/game_settings.json"

export default class Piece {
    readonly data: any;

    constructor(piece_name: string) {
        this.data = settings.pieces.find(piece => piece.name == piece_name);
    }

    illegalMoveAnalyzer() : boolean {
        return true;
    }

    get name() {
        return this.data.name;
    }

    get symbol() {
        return this.data.name.charAt(0).toUpperCase()
    }

}