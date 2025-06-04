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
        const letters = game_settings.abscissas.map(a => a.toUpperCase());
        const limit = game_settings.ordinate_limit;

        const lines: string[] = [];

        for (let y = limit; y >= 1; y--) {
            const rowSymbols: string[] = [];
            for (const letter of letters) {
                const notion = this.notions.get(letter + y);
                const symbol = notion && notion.piece ? notion.piece.symbol : ".";
                rowSymbols.push(symbol);
            }
            lines.push(`${y} | ${rowSymbols.join(" ")} |`);
        }

        lines.push("  +" + "-".repeat(letters.length * 2 - 1) + "+");
        lines.push("    " + letters.join(" "));

        return lines.join("\n");
    }


    private move_piece(oldP: Notion, newP: Notion): boolean {
        oldP.piece.setNatural(false);

        newP.setPiece(oldP.piece);
        oldP.removePiece();

        this.notions.set(newP.str_notion, newP);
        this.notions.set(oldP.str_notion, oldP)

        return true;
    }
}