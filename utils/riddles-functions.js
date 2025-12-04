import input from "analiza-sync";

/**
 * 
 * @param {Object} riddleObj 
 */
function askRiddle(riddleObj){
    
var running = true
while (running){

    console.log(riddleObj.riddleName)
    console.log(riddleObj.taskDescription)
    let hasChoices = false
    if(riddleObj.hasOwnProperty('choices')){
        hasChoices = true
        riddleObj.choices.forEach((element ,idx) => {
            console.log(`${idx + 1} : ${element}`)
        });
    }
    let userInput = input("type your choice: ")
    if (hasChoices) +userInput --
    if (userInput == riddleObj.correctAnswer){
        running = false
    }
}
}
// askRiddle(riddle)
function measureSolveTime(fn,obj)
{
    const startTime = Date.now()
    fn(obj)
    const endTime = Date.now()
    const timeDuration = Math.floor((endTime - startTime) / 1000)
    return timeDuration
}
// console.log(measureSolveTime(askRiddle,riddle))
export default {askRiddle, measureSolveTime}












    // const answers, userChoice;
    // const arreyWithIndex;







//     if (typeof Array === riddleObj.choices)
        
//         riddleObj.choices.forEach((item, index) => {
//         arreyWithIndex.push(`${index}: ${item}`)
//         console.log(arreyWithIndex)},
//         userChoice = input("type your choice number: ")
//         answers = riddleObj.choices.findIndex()
//     if (userChoice == ) 
//     }
// }