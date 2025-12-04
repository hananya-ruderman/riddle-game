import input from "analiza-sync";

function createPlayer()
{
    const userName = input("what is your name")
    const theUser = {
        userName: userName,
        playTime: []
    } 
    console.log(theUser)
    return theUser
}

function addSolveTime(player, seconds)
{
    player.playTime.push(seconds)
    console.log(player)
}

function showStats(player)
{
    let totalTime, avarageTime;
    player.playTime.forEach(element => {totalTime += element});
    avarageTime = totalTime/player.playTime.length
    console.log(`your total time playing is: ${totalTime}, the avarage for a riddle is: ${avarageTime}`)
}

export {createPlayer, addSolveTime, showStats}