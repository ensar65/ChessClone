import {NotionType} from "../types";
import Piece from "./Piece";

export default class Notion {
    readonly notion: NotionType;

    constructor(notion: NotionType) {
        this.notion = notion;
    }

    get piece(): Piece {
        return <Piece>this.notion.deployment;
    }


    setPiece(piece: Piece) {
        this.notion.deployment = piece;
    }
    removePiece() : boolean {
        this.notion.deployment  = undefined;
        return true;
    }
    get natural(): boolean {
        return <boolean>this.notion.natural
    }

    setNatural(type: boolean) {
        this.notion.natural = type;
    }

    get str_notion(): string {
        return this.notion.letter.toUpperCase() + this.notion.number
    }


    static sortByBoard(notions: Map<string, Notion>) {
        return Array.from(notions, ([name, value]) => ({name, value})).sort((a, b) => {
            return a.value.notion.letter.localeCompare(b.value.notion.letter)
        }).sort((a, b): any => {
            let a_point = a.value.notion.number
            let b_point = b.value.notion.number

            return b_point - a_point;
        })
    }

}