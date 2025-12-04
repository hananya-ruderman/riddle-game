import { createPlayer, addSolveTime, showStats } from "./utils/player-functions.js"
import riddlesFunc from "./utils/riddles-functions.js"
import riddles from './riddles/riddles.js'
import input from "analiza-sync";


function game() {
    console.log("welcome to our game")
    const userName = input('Your name: ')
    const player = createPlayer(userName)
    riddles.forEach((riddle) => {
        const time = riddlesFunc.measureSolveTime(riddlesFunc.askRiddle,riddle)
        addSolveTime(player, time)
    })
    showStats(player)
}
game()



