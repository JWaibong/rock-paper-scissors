/*
user needs to input rock paper scissors
computer opponent needs to randomly generate rock paper scissors
need to compare the two
determine winner
*/

function computerInput(){
    const random = Math.floor(1 + Math.random()*3);
    switch(random){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "Error";
    }
}
function play(userInput, computerInput){
    userInput = userInput.toLowerCase();
    if(userInput == computerInput){
        return "tie";
    }
    switch(userInput){
        case "rock":
            if(computerInput == "paper"){
                return "lose";
            }
            else{
                return "win";
            } 
        case "paper":
            if(computerInput == "scissors"){
                return "lose";
            }
            else {
                return "win";
            }
        case "scissors":
            if(computerInput == "rock"){
                return "lose";
            }
            else {
                return "win";
            }
        default:
            return "Incorrect input. Please enter one of the following: rock paper scissors";        
    }
}
let input1 = computerInput();
let input2 = computerInput();
console.log(input1 + " vs " + input2);
console.log("result: " + input1 + " " + play(input1, input2));
