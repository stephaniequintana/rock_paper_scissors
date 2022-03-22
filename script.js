        // player wins:
            // PAPER v rock
            // ROCK v scissors
            // SCISSORS v paper
        // computer wins:
            // rock v PAPER
            // paper v SCISSORS
            // scissors v ROCK
const gameContainer = document.getElementById('game-container');
const play = document.getElementById('play');
const reset = document.getElementById('reset');
const playerChoice = document.querySelectorAll('.player-choice');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const roundSummary = document.getElementById('round-summary');
const vs = document.getElementById('vs');
const fist = document.getElementById('game-fist');
const fistSVG = document.getElementById('fist');
const cRck = document.getElementById('c-rck');
const cPpr = document.getElementById('c-ppr');
const cScrs = document.getElementById('c-scrs');
let playerSelection;
let computerSelection;
let playerWins = 0;
let computerWins = 0;
let winnerText = '';
let counter = 1;
let roundArr = [];

window.addEventListener('load', () => {
  play.addEventListener('click', game);
} )
reset.addEventListener('click', resetGame);

function updateToGameUI() {
  const bgImg = document.getElementById('bg-img');
  play.style.display = "none";
  bgImg.style.display = "none";
  gameContainer.style.visibility = 'visible';
}

function animateFist(){
  fist.classList.add('animate');
  fist.addEventListener('animationend', () => {
    fist.classList.remove('animate');
  });
}

function getWeapons(elem) {
  fistSVG.style.opacity = ".2";
  vs.innerText = "vs.";
  if(elem.classList.contains('rck')) playerSelection = "rock";
  if(elem.classList.contains('ppr')) playerSelection = "paper";
  if(elem.classList.contains('scrs')) playerSelection = "scissors";
  elem.classList.add('chosen');

  computerPlay();
  roundArr.push(computerSelection, playerSelection, elem);
  return roundArr;
}

function computerPlay(){
  let randomNum = Math.floor(Math.random() * 3) + 1;
  computerSelection = (randomNum == 1)? "rock" :
                      (randomNum == 2)? "paper" : "scissors";
  if(computerSelection === "rock")  cRck.classList.add('cmptr-chosen');
  if(computerSelection === "paper") cPpr.classList.add('cmptr-chosen');
  if(computerSelection === "scissors") cScrs.classList.add('cmptr-chosen');
  console.log(`computer selected ${computerSelection}`);
  return computerSelection;
}

function playRound(computerSelection, playerSelection) {
  const rock = "rock";
  const paper = "paper";
  const scissors = "scissors"
  //  str.localeCompare(str2) => 0 if same, -1 if 1st operand sorted first, 1 if 2nd operand sorted first..
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
                  counter++;
      } else {
        winnerText = `You lost this round, ${computerSelection} beats ${playerSelection}. WhaaaWhaaaa.`
        computerWins += 1;
        counter++;
      }
  updateRoundUI();
  return roundArr;
}

function updateRoundUI() {
  if(playerWins === 5) {
    winnerText = 'CONGRATULATIONS! You are the undisputed CHAMPION!!!';
  }
  if(computerWins === 5) {
    winnerText = `The COMPUTER WINS!!! \n You simply must practice more. \n (Just kidding - this is a game of chance)`;
  }
  console.log(winnerText);

  roundSummary.innerText = winnerText;
  playerScore.innerText = playerWins;
  computerScore.innerText = computerWins;

}
function getWeaponsAndPlay(event){
  event.stopPropagation();
  gameContainer.style.pointerEvents = 'none';
  const elem = event.currentTarget;
  getWeapons(elem);
  playRound(computerSelection, playerSelection);
  if(playerWins === 5 || computerWins === 5) {
    gameContainer.style.pointerEvents = 'none';
    playerChoice.forEach((choice) => {
    choice.removeEventListener('click', getWeaponsAndPlay);
    });
    return;
  }
  setTimeout(resetRoundUI, 2500, computerSelection, elem);
}

function resetRoundUI(computerSelection, element) {
  gameContainer.style.pointerEvents = 'auto';
  element.classList.remove('chosen');
  if(playerWins === 5 || computerWins === 5) return;
  if(computerSelection === "rock")  cRck.classList.remove('cmptr-chosen');
  if(computerSelection === "paper") cPpr.classList.remove('cmptr-chosen');
  if(computerSelection === "scissors") cScrs.classList.remove('cmptr-chosen');

  fistSVG.style.opacity = "1";
  vs.innerText = "";
  winnerText = `Round ${counter}`;
  roundSummary.innerText = winnerText;
  animateFist();
  roundArr.length = 0;
  return roundArr;
}

function game(){
  updateToGameUI();
  animateFist();
  playerChoice.forEach((choice) => {
    choice.addEventListener('click', getWeaponsAndPlay);
  });
}
function resetGame() {
  playerChoice.forEach((choice) => {
    choice.classList.remove('chosen');
  });
  if(computerSelection === "rock")  cRck.classList.remove('cmptr-chosen');
  if(computerSelection === "paper") cPpr.classList.remove('cmptr-chosen');
  if(computerSelection === "scissors") cScrs.classList.remove('cmptr-chosen');
  fistSVG.style.opacity = "1";
  vs.innerText = "";
  playerWins = 0;
  computerWins = 0;
  counter = 1;
  winnerText = `Round ${counter}`;
  roundSummary.innerText = winnerText;
  playerScore.innerText = playerWins;
  computerScore.innerText = computerWins;
  playerChoice.forEach((choice) => {
    choice.removeEventListener('click', getWeaponsAndPlay);
  });
  game();
}
function nothing(){return};
