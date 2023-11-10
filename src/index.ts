import settings from "./config/game_settings.json"
import Piece from "./game/Piece";
import simulator from "./refs/simulator";


simulator()

console.log(new Piece("pawn").name)