import {PieceConfig} from "../types";


let pieces : PieceConfig[] =  [
  {
    "name" : "pawn",
    "deployment" : ["A2","B2","C2","D2","E2","F2","G2","H2","A7","B7","C7","D7","E7","F7","G7","H7"],
    "movement" : {
      "blockable" : true,
      "natural_boost" : 1,
      "backward" : false,
      "forward" : 1,
      "sideways" : 0,
      "cross": 0,
      "moveSameTime" :  false,
      "eatingScheme" : {
        "cross" : 1,
        "forward" : 0,
        "sideways" : 0
      }
    }
  },
  {
    "name" : "knight",
    "deployment" : ["B1","B8","G1","G8"],
    "movement" : {
      "blockable" : false,
      "natural_boost" : false,
      "moveSameTime" : [[2,1], [1,2]],
      "backward" : false,
      "forward" : 0,
      "sideways" : 0,
      "cross": 0,
    }
  },
  {
    "name" : "bishop",
    "deployment" : ["C1","C8","F1","F8"],
    "movement" : {
      "blockable" : true,
      "natural_boost" : false,
      "moveSameTime" : false,
      "forward" : 0,
      "backward" : true,
      "sideways" : 0,
      "cross" : 8
    }
  },
  {
    "name" : "queen",
    "deployment" : ["D1","D8"],
    "movement" : {
      "blockable" : true,
      "natural_boost" : false,
      "moveSameTime" : false,
      "backward" : true,
      "forward" : 99,
      "sideways" : 99,
      "cross" : 99
    }
  },
  {
    "name" : "check",
    "deployment" : ["E1","E8"],
    "movement" : {
      "blockable" : true,
      "natural_boost" : false,
      "moveSameTime" : false,
      "backward" : true,
      "forward" : 1,
      "sideways" : 1,
      "cross" : 1
    }
  },

  {
    "name" : "rook",
    "deployment" : ["A1","A8","H1","H8"],
    "movement" : {
      "blockable" : true,
      "natural_boost" : false,
      "moveSameTime" : false,
      "backward" : true,
      "forward" : 99,
      "sideways" : 99,
      "cross" : 0

    }
  }
]



export default {
  "abscissas": [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h"
  ],
  "ordinate_limit": 8,
  pieces
}