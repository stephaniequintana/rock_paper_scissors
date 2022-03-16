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
const playerChoice = document.querySelectorAll('.player-choice');
const play = document.getElementById('play');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const roundSummary = document.getElementById('round-summary');
const gameDiv = document.getElementById('game-fist');
const fist = document.getElementById('fist');
const cRck = document.getElementById('c-rck');
const cPpr = document.getElementById('c-ppr');
const cScrs = document.getElementById('c-scrs');
let playerSelection;
let computerSelection;
let playerWins = 0;
let computerWins = 0;
let winnerText = '';
let roundArr = [];

window.addEventListener('load', () => {
  play.addEventListener('click', game);
} )
// play.addEventListener('click', game);
function animateFist(){
  fist.classList.add('animate');
  fist.addEventListener('transitionend', () => {
    fist.classList.remove('animate');
  });
}
function updateToGameUI() {
  const bgImg = document.getElementById('bg-img');
  const gameContainer = document.getElementById('game-container');

  play.style.visibility = "hidden";
  bgImg.style.display = "none";
  gameContainer.style.visibility = 'visible';
}


function getWeapons(elem) {
  if(elem.classList.contains('rck')) playerSelection = "rock";
  if(elem.classList.contains('ppr')) playerSelection = "paper";
  if(elem.classList.contains('scrs')) playerSelection = "scissors";
  elem.classList.add('chosen');
  console.log(elem.classList);

  computerPlay();
  roundArr.push(computerSelection);
  roundArr.push(playerSelection, elem);

  return roundArr;
}

function computerPlay(){
  let randomNum = Math.floor(Math.random() * 3) + 1;
  computerSelection = (randomNum == 1)? "rock" :
                      (randomNum == 2)? "paper" : "scissors";
  if(computerSelection === "rock")  cRck.classList.add('cmptr-chosen');
  if(computerSelection === "paper") cPpr.classList.add('cmptr-chosen');
  if(computerSelection === "scissors") cScrs.classList.add('cmptr-chose');
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
      } else {
        winnerText = `You lost this round, ${computerSelection} beats ${playerSelection}. WhaaaWhaaaa.`
        computerWins += 1;
      }
  return roundArr;
}

function updateRoundUI() {
  if(playerWins === 5) {
    winnerText = 'CONGRATULATIONS! You are the undisputed CHAMPION!!!';
  }
  if(computerWins === 5) {
    winnerText = `The COMPUTER WINS!!! \n You simply must practice more. \n (Just kidding - this is a game of chance)`;
  }

  roundSummary.innerText = winnerText;
  playerScore.innerText = playerWins;
  computerScore.innerText = computerWins;

}
async function getWeaponsAndPlay(event){
  event.stopPropagation();
  let elem = event.currentTarget;
  let weapons = await getWeapons(elem);
  let roundComplete = await playRound(...weapons);
  let ready = await resetRoundUI(...roundComplete);
}

function resetRoundUI(computerPlay, playerSelection, elem) {
  if(playerWins === 5 || computerWins === 5) return;
  elem.classList.remove('chosen');
  if(computerSelection === "rock")  cRck.classList.remove('cmptr-chosen');
  if(computerSelection === "paper") cPpr.classList.remove('cmptr-chosen');
  if(computerSelection === "scissors") cScrs.classList.remove('cmptr-chose');
  const reload = document.getElementById('game-container');
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
