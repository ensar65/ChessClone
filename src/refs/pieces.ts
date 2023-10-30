import notions from "./notions";


let pieces = notions.map(notion => {
    if (notion.number === 2 || notion.number === 7) {
        notion["piece"] = "Pawn";
        notion["natural"] = true;

    }
    else if ((notion.letter === "a" || notion.letter === "h") && (notion.number === 1 || notion.number === 8)) {
        notion["piece"] = "Rook";
        notion["natural"] = true;
    }
    else if ((notion.letter === "b" || notion.letter === "g") && (notion.number === 1 || notion.number === 8)) {
        notion["piece"] = "Knight";
    }
    else if ((notion.letter === "c" || notion.letter === "f") && (notion.number === 1 || notion.number === 8)) {
        notion["piece"] = "Bishop";
    }
    else if (notion.letter === "d" && (notion.number === 1 || notion.number === 8)) {
        notion["piece"] = "Queen";
    }
    else if (notion.letter === "e" && (notion.number === 1 || notion.number === 8)) {
        notion["piece"] = "Check";
        notion["natural"] = true;
    }
    else notion["piece"] = " "
    return notion
});

let sorted_pieces = pieces.sort((a, b) => {
    return b.number - a.number
});

export default sorted_pieces