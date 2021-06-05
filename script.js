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
                score2++;
                return "lose";
            }
            else{
                score1++;
                return "win";
            } 
        case "paper":
            if(computerInput == "scissors"){
                score2++;
                return "lose";
            }
            else {
                score1++;
                return "win";
            }
        case "scissors":
            if(computerInput == "rock"){
                score2++;
                return "lose";
            }
            else {
                score1++;
                return "win";
            }
        default:
            return "Incorrect input." +
            "Please enter one of the following: rock paper scissors";        
    }
}
function checkWin(scoreOne, scoreTwo){
    if(score1 >= 5){
        scoreTracker.textContent = "User wins";
    }
    else if(score2 >= 5){
        scoreTracker.textContent = "Computer wins";
    }
}
let score1 = 0;
let score2 = 0;
const div = document.querySelector("#container");
let result = "";

const rock = document.createElement("button");
rock.textContent = "Rock";
rock.addEventListener("click", function(e){
     result = play("Rock", computerInput());
     scoreTracker.textContent = "User Score: " + score1 + "\n" + "Computer Score: " + score2;  
     checkWin(score1, score2);
});


const paper = document.createElement("button");
paper.textContent = "Paper";
paper.addEventListener("click", function(e){
    result = play("Paper",computerInput());
    scoreTracker.textContent = "User Score: " + score1 + "\n" + "Computer Score: " + score2;  
    checkWin(score1, score2);
});


const scissors = document.createElement("button");
scissors.textContent = "Scissors";
scissors.addEventListener("click", function(e){
    result = play("Scissors", computerInput());
    scoreTracker.textContent = "User Score: " + score1 + "\n" + "Computer Score: " + score2;  
    checkWin(score1, score2);
});

div.appendChild(rock);
div.appendChild(paper);
div.appendChild(scissors);

const scoreTracker = document.querySelector("#score");
const winner = document.createElement("p");

/*while(keepGoing){
    if(score1 >= 5 || score2 >= 5){
        console.log("someone won");
    }
}
/*
Copy your original code into a new file so you don’t lose it.
For now, remove the logic that plays exactly five rounds.
Create three buttons, one for each selection. 
Add an event listener to the buttons that calls your playRound 
function with the correct playerSelection every time a button is clicked. 
(you can keep the console.logs for this step)
Add a div for displaying results and change all of 
your console.logs into DOM methods.
Display the running score, and announce a winner of the 
game once one player reaches 5 points.
You will likely have to refactor (rework/rewrite) 
your original code to make it work for this. That’s OK! 
Reworking old code is an important part of the programmer’s life.
Don’t forget to go back and add your new version to the original 
Rock Paper Scissors Project!

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
            return "Incorrect input." +
            "Please enter one of the following: rock paper scissors";        
    }
}
function game(){
    let score1 = 0;
    let score2 = 0;
    for(let i=1; i<6; i++){
        let input1 = prompt("Round "+ i +": Input one of the following: " + 
        "rock paper scissors");
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
*/
