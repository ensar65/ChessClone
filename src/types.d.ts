import Piece from "./game/Piece";

interface NotionType {
    letter: string; number: number; deployment? : Piece; natural? : boolean;
}

interface PieceConfig {
    name : string,
    deployment : string[],
    movement : {
        blockable : boolean,
        natural_boost : {
            "xy" : number,
            "x" : number,
            "y" : number
        } | boolean,
        backward : boolean,
        x : number,
        y : number,
        xy : number,
        moveSameTime : {
            "xy" : number,
            "x" : number,
            "y" : number
        }[] | boolean,
        eatingScheme? : {
            "xy" : number,
            "x" : number,
            "y" : number
        } | boolean
    }
}