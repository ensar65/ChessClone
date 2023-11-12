import Notion from "./Notion";

export default class Board {
    private notions: Map<string, Notion>;

    constructor(notions: Map<string, Notion>) {
        this.notions = notions;

    }

    move(n1: string, n2: string) {
        let oldP = this.notions.get(n1) as Notion;
        let newP = this.notions.get(n2) as Notion;

        if (!oldP.piece) return;

        if(oldP.piece.illegalMoveAnalyzer(oldP, newP, this.notions))


        this.move_piece(oldP, newP);
    }


    private move_piece(oldP: Notion, newP: Notion): boolean {


        return true;
    }
}