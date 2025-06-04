import settings from "../config/game_settings"
import Notion from "./Notion";
import {PieceConfig} from "../types";
import game_settings from "../config/game_settings";

export default class Piece {
    private data: PieceConfig;
    public natural: boolean;
    public readonly color: 'white' | 'black';

    constructor(piece_name: string, color: 'white' | 'black') {
        this.data = settings.pieces.find(piece => piece.name == piece_name) as PieceConfig;
        this.natural = true;
        this.color = color;
    }

    illegalMoveAnalyzer(oldP: Notion, newP: Notion, notions: Map<string, Notion>): boolean {
        const letters = game_settings.abscissas;
        const oldIndex = letters.indexOf(oldP.notion.letter);
        const newIndex = letters.indexOf(newP.notion.letter);

        const dx = newIndex - oldIndex;
        const dy = newP.notion.number - oldP.notion.number;

        const absDx = Math.abs(dx);
        const absDy = Math.abs(dy);

        const pathClear = (): boolean => {
            const stepX = Math.sign(dx);
            const stepY = Math.sign(dy);
            const steps = Math.max(absDx, absDy);
            for (let i = 1; i < steps; i++) {
                const letter = letters[oldIndex + stepX * i];
                const number = oldP.notion.number + stepY * i;
                const key = letter.toUpperCase() + number;
                const n = notions.get(key);
                if (n?.piece) return false;
            }
            return true;
        };

        switch (this.data.name) {
            case 'pawn': {
                const dir = this.color === 'white' ? 1 : -1;
                if (dx === 0) {
                    if (dy === dir && !newP.piece) return true;
                    if (dy === 2 * dir && this.natural && !newP.piece) {
                        const betweenKey = oldP.notion.letter.toUpperCase() + (oldP.notion.number + dir);
                        const between = notions.get(betweenKey);
                        return !between?.piece;
                    }
                }
                if (absDx === 1 && dy === dir && newP.piece && newP.piece.color !== this.color) return true;
                return false;
            }
            case 'rook':
                if (dx === 0 || dy === 0) return pathClear();
                return false;
            case 'bishop':
                if (absDx === absDy) return pathClear();
                return false;
            case 'queen':
                if (dx === 0 || dy === 0 || absDx === absDy) return pathClear();
                return false;
            case 'king':
                return absDx <= 1 && absDy <= 1;
            case 'knight':
                return (absDx === 1 && absDy === 2) || (absDx === 2 && absDy === 1);
        }
        return false;
    }



    setNatural(type: boolean) {
        this.natural = type;
        return true;
    }

    get name() {
        return this.data.name;
    }


    get symbol() {
        return this.data.name.charAt(0).toUpperCase()
    }

}