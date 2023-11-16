import settings from "../config/game_settings"
import Notion from "./Notion";
import {PieceConfig} from "../types";

export default class Piece {
    private data: PieceConfig;

    constructor(piece_name: string) {
        this.data = settings.pieces.find(piece => piece.name == piece_name) as PieceConfig;
    }

    illegalMoveAnalyzer(oldP: Notion, newP: Notion, notions: Map<string, Notion>) : boolean {
        let forward = this.data.movement.forward;
        let backward = this.data.movement.backward;
        let cross = this.data.movement.cross;
        let sideways = this.data.movement.sideways;


        if(newP.piece) { //Eating attempt.
            if(this.data.movement.eatingScheme) {

            } else {

            }
        } else { //Piece moving
            if(this.data.movement.moveSameTime) { //If piece goes to different dimensions at the same time like knight.

            } else {

            }
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