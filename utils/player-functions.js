
function createPlayer(userName) {
    const theUser = {
        userName,
        playTime: []
    }
    return theUser
}


/**
 * @param {Object} player 
 * @param {Number} seconds 
 */
function addSolveTime(player, seconds) {

    player.playTime.push(seconds)
}

function showStats(player) {
    const totalTime = player.playTime.reduce((acc, element) => acc + element,0);
    const avarageTime = totalTime / player.playTime.length
    console.log(`your total time playing is: ${totalTime}, the avarage for a riddle is: ${avarageTime}`)
}

// showStats({ playTime: [1, 2, 3, 4] })

export { createPlayer, addSolveTime, showStats }