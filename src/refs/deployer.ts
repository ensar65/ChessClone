import notions from "./notions";
import settings from "../config/game_settings"
import Piece from "../game/Piece";



export default function () {
   settings.pieces.forEach(piece => {
      notions.forEach(notion => {
         const notion_string = notion.str_notion;
         if (piece.deployment?.includes(notion_string)) {
            const color = notion.notion.number <= 2 ? 'white' : 'black';
            notion.setPiece(new Piece(piece.name, color));
         }
      });
   });

   return notions;
}