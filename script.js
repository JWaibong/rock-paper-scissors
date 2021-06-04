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
function game(){
    let score1 = 0;
    let score2 = 0;
    for(let i=1; i<6; i++){
        let input1 = prompt("Round "+ i +": Input one of the following: rock paper scissors");
        let input2 = computerInput();
        input1 = input1.toLowerCase();
        let result = play(input1, input2);
        console.log(input1 + " vs " + input2);
        console.log("result: You " + result + " Round " + i);
        if(result == "win"){
            score1++;
        }
        else if(result == "lose"){
            score2++;
        }
    }
    console.log("Your score:" + score1);
    console.log("Opponent score:" + score2);
    if(score1 > score2){
        console.log("You win the game");
    }
    else if (score1 < score2){
        console.log("You lose the game");
    }
    else{
        console.log("Tie");
    }
}
game();

