import settings from "../../config/game_settings.json"

class Pawn {
    private notion: Notion;

    constructor(notion: Notion) {
        this.notion = notion;
    }


    illegalPawnMoveCheck(move: Notion) {
        if (this.notion.piece !== "Pawn") return false;

        if (move.piece !== "Blank") { //Trying to eat some pieces.
            let alphabetical_notions = settings.abscissas;

            let old_notion_a = this.notion.letter;
            let old_notion_index = alphabetical_notions.indexOf(old_notion_a);

            let new_notion_a = move.letter;
            let new_notion_index = alphabetical_notions.indexOf(new_notion_a);

            let possible_eating_positions = [old_notion_index + 1, old_notion_index - 1];

            return possible_eating_positions.includes(new_notion_index);
        } else {
            if (this.notion.letter !== move.letter) return false;
            let possible_upgrade = 1; //If piece is natural can upgrade 2 square.
            if (this.notion.natural) possible_upgrade += 1;

            if (move.number > this.notion.number + possible_upgrade) return false; //Illegal upgrade.
            return true;
        }
    }

}

export default Pawn