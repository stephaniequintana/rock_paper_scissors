// function setTheme() {
//   const root = document.documentElement;
//   const newTheme = root.className === 'dark' ? 'light' : 'dark';
//   root.className = newTheme;

//   document.querySelector('.theme-name').textContent = newTheme;
// }

// document.querySelector('.theme-toggle').addEventListener('click', setTheme);




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
const play = document.getElementById('btn-play');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const roundSummary = document.getElementById('round-summary');
const gameDiv = document.getElementById('game-fist');
  const fist = document.getElementById('fist');
let playerSelection;
let computerSelection;
let playerWins = 0;
let computerWins = 0;

play.addEventListener('click', game);

function updateToGameUI() {
  const bgImg = document.getElementById('bg-img');
  const gameContainer = document.getElementById('game-container');

  play.style.visibility = "hidden";
  bgImg.style.display = "none";
  gameContainer.style.visibility = 'visible';
}

function animateFist(){
  fist.classList.add('animate');
  fist.addEventListener('transitionend', () => {
    fist.classList.remove('animate');
  });
}
// let timerId = setInterval(animateFist, 1600);
//   setTimeout(() => clearInterval(timerId), 10000);
function getWeapons(event) {

  if(this.classList.contains('rck')){
    playerSelection = "rock";
  }

  if(this.classList.contains('ppr')){
    playerSelection = "paper";
  }

  if(this.classList.contains('scrs')){
    playerSelection = "scissors";
  }

  roundArr.push(playerSelection);

  this.classList.add('chosen');
  fist.style.visibility = 'hidden';
  gameDiv.style.fontSize = "5rem";
  gameDiv.innerText = "vs.";

  computerPlay();

  roundArr.push(computerSelection);

  return roundArr;
}

function computerPlay(){
  let randomNum = Math.floor(Math.random() * 3) + 1;

  computerSelection = (randomNum == 1)? "rock" :
                      (randomNum == 2)? "paper" : "scissors";

  if(computerSelection === "rock"){
    cRck.classList.add('cmptr-chosen');
  }

  if(computerSelection === "paper"){
    cPpr.classList.add('cmptr-chosen');
  }

  if(computerSelection === "scissors"){
    cScrs.classList.add('cmptr-chosen');
  }
  return computerSelection;
}

function resetRoundUI(event) {
  if(playerWins === 5 || computerWins === 5) return;
  this.classList.remove('chosen');
  cRck.classList.remove('cmptr-chosen');
  cPpr.classList.remove('cmptr-chosen');
  cScrs.classList.remove('cmptr-chosen');
  gameDiv.innerText = "";
  fist.style.visibility = 'visible';
}

function playRound(playerSelection, computerSelection) {

  const rock = "rock";
  const paper = "paper";
  const scissors = "scissors"
  let winnerText = '';
        //if player/computer choose same...
  if(playerSelection.localeCompare(computerSelection) == 0) {
      winnerText = `Both you and the computer chose "${playerSelection}." That's a tie, please go again...`;
  } else if((playerSelection.localeCompare(paper) == 0
              && computerSelection.localeCompare(rock) == 0)
          || (playerSelection.localeCompare(rock) == 0
              && computerSelection.localeCompare(scissors) == 0)
          || (playerSelection.localeCompare(scissors) == 0
              && computerSelection.localeCompare(paper) == 0)) {
              winnerText = `You won this round, ${playerSelection} beats ${computerSelection}!!! `
              playerWins +=1;

  } else {
      winnerText = `You lost this round, ${computerSelection} beats ${playerSelection}. WhaaaWhaaaa.`
      computerWins += 1;
  }

  playerScore.innerText = playerWins;
  computerScore.innerText = computerWins;
  roundSummary.innerText = winnerText;

  if(playerWins === 5) {
    winnerText = 'CONGRATULATIONS! You are the undisputed CHAMPION!!!';
  }
  if(computerWins === 5) {
    winnerText = `The COMPUTER WINS!!! \n You simply must practice more. \n (Just kidding - this is a game of chance)`;
  }
  return resolve;

}

async function getWeaponsAndPlay(event){
  const cRck = document.getElementById('c-rck');
  const cPpr = document.getElementById('c-ppr');
  const cScrs = document.getElementById('c-scrs');
  const roundArr = [];

  event.stopPropagation();

  let result = await getWeapons(event);

  let done = await playRound(...roundArr);
  let gorilla = await resetGameUI();
}

function game(){
  const playerChoice = document.querySelectorAll('.player-choice');

  updateToGameUI();

  while(playerWins < 5 && computerWins < 5) {
    animateFist();
    playerChoice.forEach((choice) => {
      choice.addEventListener('click', getWeaponsAndPlay);
    });
  }

  // for(let i = 0; i <= 4; i++){
  //   playerChoiceBtn.forEach((btn) => {
  //     btn.addEventListener('click', getWeaponsAndPlay);
  //   })
  // }



  // scaleSVG(playerSelection);
}
