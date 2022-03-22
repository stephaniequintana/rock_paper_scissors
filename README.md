# Rock, Paper, Scissors - the game.

Check out the [live site](https://stephaniequintana.github.io/rock_paper_scissors/)!

> An exercise from The Odin Project Foundations Course, JavaScript Basics.
> The complete list of instructions for the first phase of the project, the JavaScript logic, can be found [here](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors). The second phase adds a UI *and contains plenty of logic in it's own right!* It can be found [here](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/revisiting-rock-paper-scissors).

<div align="center">
  <img src="assets/rpc_desktop.gif" style="display: block; max-width: 100%">
  <img src="assets/rps_mobile.gif" style="display: block; max-width: 100%">
</div>


## Table of Contents
* [General Info](#general-information)
* [Challenges Encountered and Knowledge Gained](#challenges-encountered-and-knowledge-gained)
* [Languages](#languages)

## General Information
- The first phase of the project entails setting up the logic of the game:
    * Creating a function which allows the computer to make a random selection.
    * Creating a function which prompts a user's selection and returns the winner of the two.
    * Finally, creating a function which selects the winner, the best of 5 rounds.

- The second phase of the project is all about creating a user interface for the game. This was FUN (&&& more challenging than I assumed it would be)!!!
    *
    * I opted to go with SVGs because I wanted more exposure with working with them. Specifically, I wanted to play with SVG animation.
    * This was an excellent opportunity to get more practice with

## Challenges Encountered and Knowledge Gained
* git
    - This project provided and excellent opportunity to begin utilizing and putting to memory the ever-so-necessary `git checkout -b new_branch`, `git merge`, `git pull` and `git rebase` and more...
* css grid
    - I was able to utilize the grid layout for mobile and desktop, by easily updating `grid-gap` and `grid-area` the layouts were a seamless transition.
* DOM manipulation
    - The bulk of my manipulations came from adding/removing classes and figuring this into the logic was fun! I also utilized `setTimeout` to reset the UI between rounds along with `gameContainer.style.pointerEvents = 'auto';` for disabling the click event

    > `playerChoice.forEach((choice) => {choice.addEventListener('click', getWeaponsAndPlay);});`

* The Ternary Operator,
    `(conditional) ? chooseIfTrue : chooseIfFalse;`,
    is by far more convenient than writing out a lengthy if statement.
* String Comparison in JavaScript:
    - `string1.localeCompare(string2)` proved to be incredibly useful in the winner selection.
    - Caveats include the necessity of datatype recognition and insurance of variable definition.
* Closures, Scope and High Order Functions
    - To hammer in the point: IT MATTERS WHERE A FUNCTION IS DEFINED!!!
    - I made the mistake of assuming that calling a function from within another function gave access to the latter's variables. It does not. The realization was a HUGE 'AHHHH HAAAAA' moment in my learning. The ability to return a function's value to another function is where the magic lives.

## Languages
- JavaScript (vanilla)
- CSS - Grid
- HTML
