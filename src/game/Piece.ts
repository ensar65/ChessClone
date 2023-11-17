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
        let forward = this.data.movement.forward;
        let backward = this.data.movement.backward;
        let cross = this.data.movement.cross;
        let sideways = this.data.movement.sideways;

        let old_ = {letter: oldP.notion.letter, number: oldP.notion.number};
        let new_ = {letter: newP.notion.letter, number: newP.notion.number};

        let old_a_index = game_settings.abscissas.indexOf(old_.letter) + 1;
        let new_a_index = game_settings.abscissas.indexOf(new_.letter) + 1;

        let ordinate_change = old_.number - new_.number;

        let probably_sideways = Math.abs(old_a_index - new_a_index);
        let probably_forward = Math.abs(ordinate_change);

        let isBackward = ordinate_change > 0;

        let move_data = {
            cross : 0,
            forward : 0,
            sideways : 0
        }

        if(probably_forward === probably_sideways) move_data.cross = probably_sideways
        else if(probably_forward) move_data.forward = probably_forward
        else if(probably_sideways) move_data.sideways = probably_sideways

        console.log(move_data)

        if(!backward && isBackward) return false;

        if (newP.piece) { //Eating attempt.
            if (this.data.movement.eatingScheme) {

            } else {

            }
        } else { //Piece moving
            if (this.data.movement.moveSameTime) { //If piece goes to different dimensions at the same time like knight.

            } else {
                let natural_boost = this.data.movement.natural_boost;
                if(natural_boost) {
                    let boost_count = natural_boost as number;
                    if(oldP.notion.natural) {
                        forward += boost_count;
                    }
                }
                console.log(forward)
                if (move_data.cross > cross || move_data.sideways > sideways || move_data.forward > forward) return false;
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