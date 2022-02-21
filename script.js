// create function, computerPlay that will randomly return rock, paper or scissors
    //  randomly generate # 1 - 3, assign to r,p,s

// let computerSelection;
function computerPlay(){
    let randomNum = Math.floor(Math.random() * 3) + 1;

    console.log(randomNum);
    computerSelection = (randomNum == 1)? "rock" :
                            (randomNum == 2)? "paper" : "scissors";
    console.log(computerSelection);
    return computerSelection;
}

// write a function, playRound that plays a single round
    //  takes two arguments: playerSelection & computerSelection
    //  return a string that declares a winner
    // todo ensure playerSelection is case-insensitive
    //  str.localeCompare(str2) => 0 if same, -1 if 1st operand sorted first, 1 if 2nd operand sorted first
    //possible outcomes: //  paper beats rock //  rock beats scissors //  scissors beats paper
        //TIE - same => 0
        // player wins:
            // PAPER v rock
            // ROCK v scissors
            // SCISSORS v paper
        // computer wins:
            // rock v PAPER
            // paper v SCISSORS
            // scissors v ROCK


//  playerSelection.trim().toLocaleLowerCase();
let playerWins = 0;
let computerWins = 0;

game();

function playRound(playerSelection, computerSelection) {

    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors"
    let winnerText = '';

    if(playerSelection.localeCompare(computerSelection) == 0) {
        winnerText = `Both you and the computer chose "${playerSelection}." That's a tie, please go again...`;
    } else if((playerSelection.localeCompare(paper) == 0 && computerSelection.localeCompare(rock) == 0)
            || (playerSelection.localeCompare(rock) == 0 && computerSelection.localeCompare(scissors) == 0)
            || (playerSelection.localeCompare(scissors) == 0 && computerSelection.localeCompare(paper) == 0)) {
                winnerText = `You won this round, ${playerSelection} beats ${computerSelection}!!! `
                playerWins +=1;
    } else {
        winnerText = `You lost this round, ${computerSelection} beats ${playerSelection}. WhaaaWhaaaa.`
        computerWins += 1;
    }
   console.log(winnerText);
   console.log(`The score is now ${playerWins} for you and ${computerWins} for the computer...`)

}

 function game(){
    let playerSelection;
    let computerSelection;


    for(let i = 0; i <= 4; i++){
        playerSelection = prompt('Enter rock, paper,or /scissors...');
        computerSelection = computerPlay(); //=> will return computerSelection
        playRound(playerSelection, computerSelection);


       }
 }



//  write a new function, game(), INSIDE of playRound to play a 5 round game
function forUpdate(){
    console.log('UI coming soon...');
}
