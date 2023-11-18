import config from "../config/game_settings"
import {NotionType} from "../types";
import Notion from "../game/Notion";

let abscissas = config.abscissas;
let ordinate_limit = config.ordinate_limit;


let possible_notions: NotionType[] = [];
let notions: Map<string, Notion> = new Map();
abscissas.forEach(abscissa => {
    for (let i = 0; i < ordinate_limit; i++) {
        possible_notions.push({letter: abscissa, number: (i + 1)});
    }
});

possible_notions.forEach(notion => {
    notions.set(notion.letter.toUpperCase() + notion.number, new Notion(notion));
});


export default notions