function computerInput(){ // returns string for the computer's input
    const random = Math.floor(1 + Math.random()*3);
    switch(random){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default:
            return "Error";
    }
}
function play(userInput, computerInput){ // returns string
    //compares the user's input to the computer's input to determine match winner
    matchup.textContent = "User: " +userInput + " vs Computer: " + computerInput;
    div.appendChild(matchup);
    userInput = userInput.toLowerCase();
    if(userInput == computerInput.toLowerCase()){
        return "tie";
    }
    switch(userInput){
        case "rock":
            if(computerInput == "Paper"){
                score2++;
                return "lose";
            }
            else{
                score1++;
                return "win";
            } 
        case "paper":
            if(computerInput == "Scissors"){
                score2++;
                return "lose";
            }
            else {
                score1++;
                return "win";
            }
        case "scissors":
            if(computerInput == "Rock"){
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
function checkRoundWin(outcome){ //void
    // depending on win/loss/tie of the round, 
//change the content of the matchWinner element
// to show the outcome of the round.
    switch(outcome){
        case "win":
            matchWinner.textContent = "User wins round.";
            div.appendChild(matchWinner);
            break;
        case "lose":
            matchWinner.textContent = "User loses round.";
            div.appendChild(matchWinner);
            break;
        default:
            matchWinner.textContent = "Tie round.";
            div.appendChild(matchWinner);
            break;
    }
}
function checkWin(scoreOne, scoreTwo){ //void
    //check if either the user or computer reached first to 5 points
    //change the text content of the winner element if so
    
    if(scoreOne >= 5){
        gameOver = true;
        winner.textContent = "User wins. Please reset game";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
    else if(scoreTwo >= 5){
        gameOver = true;
        winner.textContent = "Computer wins. Please reset game";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }

}
let gameOver = false; 
let score1 = 0;
let score2 = 0;
const div = document.querySelector("#container");
let result = "";
let cInput = ""
const rock = document.createElement("button");
rock.textContent = "Rock";
rock.addEventListener("click", function(e){
     cInput = computerInput();
     result = play("Rock", cInput);
     checkRoundWin(result);
     scoreTracker.textContent =  "User Score: " + score1 + "   "+ "Computer Score: " + score2; 

     checkWin(score1, score2);
});


const paper = document.createElement("button");
paper.textContent = "Paper";
paper.addEventListener("click", function(e){
    cInput = computerInput();
    result = play("Paper",cInput);
    checkRoundWin(result);
    scoreTracker.textContent = "User Score: " + score1 + "\n" + "Computer Score: " + score2;  

    checkWin(score1, score2);
});


const scissors = document.createElement("button");
scissors.textContent = "Scissors";
scissors.addEventListener("click", function(e){
    cInput = computerInput();
    result = play("Scissors", cInput);
    checkRoundWin(result);
    scoreTracker.textContent = "User Score: " + score1 + "Computer Score: " + score2;  
    checkWin(score1, score2);
});
div.appendChild(rock);
div.appendChild(paper);
div.appendChild(scissors);

let reset = document.createElement("button");
reset.textContent = "Reset";
reset.addEventListener("click", function(e){
    score1 = 0; 
    score2 = 0;
    gameOver = false;
    let gameText = document.querySelectorAll(".game-text");
    gameText.forEach((text) => {
        text.textContent = "";
    })
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
});
div.appendChild(reset);


let scoreTracker = document.querySelector("#score");
let matchup = document.createElement("p");
matchup.setAttribute("class", "game-text");
let matchWinner = document.createElement("p");
matchWinner.setAttribute("class", "game-text");
let outcome = document.createElement("p");
outcome.setAttribute("class", "game-text");
let winner = document.createElement("p");
winner.setAttribute("class", "game-text");
div.appendChild(winner);

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
