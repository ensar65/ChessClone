import notions from "./notions";


let pieces = notions.map(notion => {
    if (notion.number === 2 || notion.number === 7) {
        notion["piece"] = "Pawn";
    }
    if ((notion.letter === "a" || notion.letter === "h") && (notion.number === 1 || notion.number === 8)) {
        notion["piece"] = "Rook";
    }
    if ((notion.letter === "b" || notion.letter === "g") && (notion.number === 1 || notion.number === 8)) {
        notion["piece"] = "Knight";
    }
    if ((notion.letter === "c" || notion.letter === "f") && (notion.number === 1 || notion.number === 8)) {
        notion["piece"] = "Bishop";
    }
    if (notion.letter === "d" && (notion.number === 1 || notion.number === 8)) {
        notion["piece"] = "Queen";
    }
    if (notion.letter === "e" && (notion.number === 1 || notion.number === 8)) {
        notion["piece"] = "Check";
    }
    return notion
});

let sorted_pieces = pieces.sort((a, b) => {
    return b.number - a.number
});

export default sorted_pieces