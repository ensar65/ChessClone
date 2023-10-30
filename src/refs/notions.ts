import config from "../config/game_settings.json"

let abscissas = config.abscissas;
let ordinate_limit = config.ordinate_limit;


let possible_notions: Notion[] = [];

abscissas.forEach(abscissa => {
    for (let i = 0; i < ordinate_limit; i++) {
        possible_notions.push({ letter : abscissa, number : (i + 1)});
    }
});


export default possible_notions