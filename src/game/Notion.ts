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

    get natural(): boolean {
        return <boolean>this.notion.natural
    }

     setNatural(type: boolean) {
        this.notion.natural = type;
    }

    get str_notion(): string {
        return this.notion.letter.toUpperCase() + this.notion.number
    }

}