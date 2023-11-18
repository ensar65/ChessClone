import {PieceConfig} from "../types";


let pieces : PieceConfig[] =  [
  {
    "name" : "pawn",
    "deployment" : ["A2","B2","C2","D2","E2","F2","G2","H2","A7","B7","C7","D7","E7","F7","G7","H7"],
    "movement" : {
      "blockable" : true,
      "natural_boost" :  {
        "xy" : 0,
        "x" : 1,
        "y" : 0
      },
      "backward" : false,
      "x" : 1,
      "y" : 0,
      "xy": 0,
      "moveSameTime" :  false,
      "eatingScheme" : {
        "xy" : 1,
        "x" : 0,
        "y" : 0
      }
    }
  },
  {
    "name" : "knight",
    "deployment" : ["B1","B8","G1","G8"],
    "movement" : {
      "blockable" : false,
      "natural_boost" : false,
      "moveSameTime" : [
        {
          "xy" : 0,
          "x" : 2,
          "y" : 1
        },
        {
          "xy" : 0,
          "x" : 1,
          "y" : 2
        }
      ],
      "backward" : false,
      "x" : 0,
      "y" : 0,
      "xy": 0,
    }
  },
  {
    "name" : "bishop",
    "deployment" : ["C1","C8","F1","F8"],
    "movement" : {
      "blockable" : true,
      "natural_boost" : false,
      "moveSameTime" : false,
      "backward" : true,
      "x" : 0,
      "y" : 0,
      "xy" : 8
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
      "x" : 99,
      "y" : 99,
      "xy" : 99
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
      "x" : 1,
      "y" : 1,
      "xy" : 1
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
      "x" : 99,
      "y" : 99,
      "xy" : 0

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
    "h",
  ],
  "ordinate_limit": 8,
  pieces
}