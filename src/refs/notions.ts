import config from "../config/game_settings.json"

let abscissas = config.abscissas;
let ordinate_limit = config.ordinate_limit;


let possible_notions: Notion[] = [];
let notions: Map<string, Notion> = new Map();
abscissas.forEach(abscissa => {
    for (let i = 0; i < ordinate_limit; i++) {
        possible_notions.push({letter: abscissa, number: (i + 1), deployment : "empty", natural : false});
    }
});

possible_notions.forEach(notion => {
    notions.set(notion.letter.toUpperCase() + notion.number, notion);
});


export default notions