function setTheme() {
  const root = document.documentElement;
  const newTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = newTheme;

  document.querySelector('.theme-name').textContent = newTheme;
}

document.querySelector('.theme-toggle').addEventListener('click', setTheme);


const play = document.getElementById('btn-play');
const playerChoiceBtn = document.querySelectorAll('.btn-game');

const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const roundSummary = document.getElementById('round-summary');
let playerSelection;
let computerSelection;
let playerWins = 0;
let computerWins = 0;

play.addEventListener('click', game);

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


function scaleSVG(playerSelection){
  let scale = (playerSelection === "rock")? rck
              : (playerSelection === "paper")? ppr : scrs;
  scale.classList.toggle('chosen');
}

function updateToGameUI() {
  const bgImg = document.getElementById('bg-img');
  const gameContainer = document.getElementById('game-container');
  const scoreContainer = document.getElementById('score-container');

  play.style.visibility = "hidden";
  bgImg.style.display = "none";
  scoreContainer.style.visibility = 'visible';
  gameContainer.style.visibility = 'visible';
}

function animateFist(){
  const fist = document.getElementById("game-fist");
  fist.classList.toggle('animate');
}
// let timerId = setInterval(animateFist, 1600);
//   setTimeout(() => clearInterval(timerId), 10000);

function playerPlay() {

}

function computerPlay(){
  const cmptrRck = document.getElementById('cmptr-rck');
  const cmptrPpr = document.getElementById('cmptr-ppr');
  const cmptrScrs = document.getElementById('cmptr-scrs');
  let randomNum = Math.floor(Math.random() * 3) + 1;
  // randomly returns rock, paper or scissors
  console.log(randomNum);
  computerSelection = (randomNum == 1)? "rock" :
                      (randomNum == 2)? "paper" : "scissors";
  console.log(computerSelection);

  if(computerSelection === "rock"){
    cmptrRck.classList.add('cmptr-chosen');
    cmptrPpr.style.visibility = "hidden";
    cmptrScrs.style.visibility = "hidden";
  }
  if(computerSelection === "paper"){
    cmptrPpr.classList.add('cmptr-chosen');
    cmptrRck.style.visibility = "hidden";
    cmptrScrs.style.visibility = "hidden";
  }
  if(computerSelection === "scissors"){
    cmptrScrs.classList.add('cmptr-chosen');
    cmptrPpr.style.visibility = "hidden";
    cmptrRck.style.visibility = "hidden";
  }
  return computerSelection;
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
  console.log(winnerText);
  console.log(`The score is now ${playerWins} for you and ${computerWins} for the computer...`);
  console.log(playerChoice);
  return playerSelection;
}

function getWeaponsAndPlay(event){
  event.stopPropagation();
  const rck = document.getElementById('rck');
  const ppr = document.getElementById('ppr');
  const scrs = document.getElementById('scrs');
  let btn = event.currentTarget;

  if(this.classList.contains('rck')){
    playerSelection = "rock";
    ppr.style.visibility = "hidden";
    scrs.style.visibility = "hidden";
  }
  if(this.classList.contains('ppr')){
    playerSelection = "paper";
    rck.style.visibility = "hidden";
    scrs.style.visibility = "hidden";
  }
  if(this.classList.contains('scrs')){
    playerSelection = "scissors";
    ppr.style.visibility = "hidden";
    scrs.style.visibility = "hidden";
  }
  console.log(playerSelection);
  btn.classList.add('chosen');
  computerPlay();

}

function game(){

  updateToGameUI();

  animateFist();

  playerChoiceBtn.forEach((btn) => {
    btn.addEventListener('click', getWeaponsAndPlay);
  });
  // for(let i = 0; i <= 4; i++){
  //   playerChoiceBtn.forEach((btn) => {
  //     btn.addEventListener('click', getWeaponsAndPlay);
  //   })
  // }

  // playRound(playerSelection, computerSelection);

  // scaleSVG(playerSelection);
}
