import Notion from "./Notion";
import game_settings from "../config/game_settings";

export default class Board {
    private notions: Map<string, Notion>;

    constructor(notions: Map<string, Notion>) {
        this.notions = notions;

    }

    move(n1: string, n2: string) {
        let oldP = this.notions.get(n1) as Notion;
        let newP = this.notions.get(n2) as Notion;

        let abscissas = game_settings.abscissas;
        let ordinates = game_settings.ordinate_limit;

        let n1_ = n1.split("");
        let n2_ = n2.split("");

        if (!(abscissas.includes(n1_[0].toLowerCase())) || !(abscissas.includes(n2_[0].toLowerCase())) || Number(n1_[1]) === 0 || Number(n2_[1]) === 0 || ordinates < Number(n1_[1]) || ordinates < Number(n2_[1]))
            return console.log("illegalMove!")


        if (!oldP.piece) return console.log("illegalMove!");

        if (oldP.piece.illegalMoveAnalyzer(oldP, newP, this.notions))


            this.move_piece(oldP, newP);
    }

    simulateBoard() {
        let pieces = Notion.sortByBoard(this.notions);
        let first_piece_letter = pieces[0].value.notion.letter;


        let simulatedPieces = pieces.map((data, index) => {
                let symbol = data.value.piece ? data.value.piece.symbol : " ";
                let prefix = "";
                let footer = "";

                let isLineBreak = Number.isInteger((index + 1) / game_settings.ordinate_limit);


                if (first_piece_letter === data.value.notion.letter) prefix = data.value.notion.number + "  ";
                if (isLineBreak) footer = "\n";

                return prefix + symbol + footer;
            })

        ;

        return simulatedPieces.concat(game_settings.abscissas.map((a, index) => index === 0 ? "\n   " + a.toUpperCase() : a.toUpperCase())).join("")
    }


    private move_piece(oldP: Notion, newP: Notion): boolean {
        newP.setPiece(oldP.piece);
        oldP.removePiece();

        this.notions.set(newP.str_notion, newP);
        this.notions.set(oldP.str_notion, oldP)

        newP.setNatural(false);
        oldP.setNatural(false)
        return true;
    }
}