import settings from "../config/game_settings"
import Notion from "./Notion";
import {PieceConfig} from "../types";

export default class Piece {
    private data: PieceConfig;

    constructor(piece_name: string) {
        this.data = settings.pieces.find(piece => piece.name == piece_name) as PieceConfig;
    }

    illegalMoveAnalyzer(oldP: Notion, newP: Notion, notions: Map<string, Notion>) : boolean {
        if(newP.piece) { //Eating attempt.
            if(this.data.movement.eatingScheme) {

            } else {

            }
        } else { //Piece moving

        }
        return true;
    }

    get name() {
        return this.data.name;
    }


    get symbol() {
        return this.data.name.charAt(0).toUpperCase()
    }

}