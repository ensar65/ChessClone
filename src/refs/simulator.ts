import deployer from "./deployer";
import settings from "../config/game_settings"
import Notion from "../game/Notion";
import game_settings from "../config/game_settings";

let notions = deployer();


export default function () {


    let pieces = Notion.sortByBoard(notions);
    let first_piece_letter = pieces[0].value.notion.letter;


    let simulatedPieces =  pieces.map((data,index) => {
        let symbol = data.value.piece ? data.value.piece.symbol : " " ;
        let notion = data.value.notion;
        let prefix = "";
        let footer = "";

        let isLineBreak = Number.isInteger((index + 1) / game_settings.ordinate_limit);


        if(first_piece_letter === data.value.notion.letter) prefix = data.value.notion.number + "  ";
        if(isLineBreak) footer = "\n";

        return prefix + symbol + footer;
    })

    ;

    return simulatedPieces.concat(game_settings.abscissas.map((a,index) => index === 0 ? "\n   " +  a.toUpperCase() : a.toUpperCase())).join("")
}