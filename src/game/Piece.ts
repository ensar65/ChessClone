import settings from "../config/game_settings"
import Notion from "./Notion";
import {PieceConfig} from "../types";
import game_settings from "../config/game_settings";

export default class Piece {
    private data: PieceConfig;

    constructor(piece_name: string) {
        this.data = settings.pieces.find(piece => piece.name == piece_name) as PieceConfig;
    }

    illegalMoveAnalyzer(oldP: Notion, newP: Notion, notions: Map<string, Notion>): boolean {
        let x = this.data.movement.x;
        let backward = this.data.movement.backward;
        let xy = this.data.movement.xy;
        let y = this.data.movement.y;

        let old_ = {letter: oldP.notion.letter, number: oldP.notion.number};
        let new_ = {letter: newP.notion.letter, number: newP.notion.number};

        let old_a_index = game_settings.abscissas.indexOf(old_.letter) + 1;
        let new_a_index = game_settings.abscissas.indexOf(new_.letter) + 1;

        let ordinate_change = old_.number - new_.number;

        let probably_y = Math.abs(old_a_index - new_a_index);
        let probably_x = Math.abs(ordinate_change);

        let isBackward = ordinate_change > 0;

        let move_data = {
            xy: 0,
            x: 0,
            y: 0
        }

        if (probably_x === probably_y) move_data.xy = probably_y
        if (probably_x) move_data.x = probably_x
        if (probably_y) move_data.y = probably_y


        if (!backward && isBackward) return false;
        console.log(oldP.piece, newP.piece)
        if (newP.piece) { //Eating attempt.
            if (this.data.movement.eatingScheme) {

            } else {

            }
        } else { //Piece moving
            if (this.data.movement.moveSameTime) { //If piece goes to different dimensions at the same time like knight.
                let possible_moves = this.data.movement.moveSameTime;
                if (typeof possible_moves !== "boolean") {
                    let possible_move = possible_moves.filter(move => move.xy === move_data.xy && move.x === move_data.x && move.y === move_data.y);
                    return possible_move.length > 0;

                }
            } else {
                let natural_boost = this.data.movement.natural_boost;
                if (typeof natural_boost != "boolean") {

                    if (oldP.notion.natural) {
                        x += natural_boost.x;
                        y += natural_boost.y;
                        xy += natural_boost.xy;
                    }
                }
                if (move_data.xy > xy || move_data.y > y || move_data.x > x) return false;
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