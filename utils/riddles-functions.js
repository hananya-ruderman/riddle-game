import input from "analiza-sync";

function askRiddle(riddleObj)
{
    
const runing = true
while (runing);
{
    console.log(riddleObj.riddleName)
    console.log(riddleObj.taskDescription)
    const userInput = input("type your choice")
    if (userInput == riddleObj.correctAnswer)
        runing = false
  


}
}
function measureSolveTime(fn)
{
    startTime = Date.now()
    fn()
    endTime = Date.now()
    timeDuration = endTime - startTime
    return timeDuration
}

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