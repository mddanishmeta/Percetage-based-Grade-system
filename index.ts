#! /usr/bin/env node

import inquirer from "inquirer"

let PercentageNumber = 100
const answer = await inquirer.prompt(
    [
        {
    name : 'PercentageNumber',
    type : "number",
    message : "Plese Enter Your Percentage Number"
        }
    ]
    );

    if(answer.PercentageNumber >= 80)
    {
console.log("Congratulation You are Passed With A++ Grade")
    }
else if (answer.PercentageNumber >= 70){
console.log("Congratulation You are Passed With A+ Grade")
}
else if (answer.PercentageNumber >= 60){
console.log("Congratulation You are Passed With B Grade")
}else if (answer.PercentageNumber >= 50){
    console.log("Congratulation You are Passed With C Grade")
    }else if (answer.PercentageNumber <= 49){
        console.log("Sorry You are Fail with D Grade")
        }


