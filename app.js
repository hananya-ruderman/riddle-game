import {createPlayer, addSolveTime, showStats} from "./utils/player-functions.js"
import {askRiddle, measureSolveTime} from "./utils/riddles-functions.js"
import {simpleMath} from "./riddles/r2.js"
import  {animalsSound} from "./riddles/r1.js"

console.log("welcome to our game")
const player = createPlayer()
const time = measureSolveTime(askRiddle(simpleMath))
addSolveTime(player,time)
const time2 = measureSolveTime(askRiddle(animalsSound))
addSolveTime(player,time2)
showStats(player)


