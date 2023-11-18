import Piece from "./game/Piece";

interface NotionType {
    letter: string; number: number; deployment? : Piece; natural? : boolean;
}

interface PieceConfig {
    name : string,
    deployment : string[],
    movement : {
        blockable : boolean,
        natural_boost : number | boolean,
        backward : boolean,
        forward : number,
        sideways : number,
        cross : number,
        moveSameTime : {
            "cross" : number,
            "forward" : number,
            "sideways" : number
        }[] | boolean,
        eatingScheme? : {
            "cross" : number,
            "forward" : number,
            "sideways" : number
        } | boolean
    }
}