import deployer from "./deployer";
import settings from "../config/game_settings"
import Notion from "../game/Notion";

let notions = deployer();


export default function () {


    let pieces = Notion.sortByBoard(notions);


    let symboled_pieces = pieces.map(piece => {
        if (settings.abscissas.indexOf(piece.value.notion.letter) + 1 == settings.abscissas.length) {
            return piece.value.piece ? piece.value.piece.symbol + "\n" : " \n"
        } else return piece.value.piece ? piece.value.piece.symbol : " "
    });
    return symboled_pieces.join("")
}