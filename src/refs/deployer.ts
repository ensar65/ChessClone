import notions from "./notions";
import settings from "../config/game_settings.json"


export default function () {
   settings.pieces.forEach(piece => {
      notions.forEach(notion => {
         let notion_string = notion.letter.toUpperCase() + notion.number;
         if(piece.deployment?.includes(notion_string)) {

            notion.deployment = piece.name;
            notion.natural = true;

            notions.set(notion_string,notion);
         }
      });
   });

   return notions;
}