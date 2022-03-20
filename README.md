# Rock, Paper, Scissors - the game.
> An exercise from The Odin Project Foundations Course, JavaScript Basics.
> The complete list of instructions for the first phase of the project can be found [here](https://github.com/gitpoint/git-point/edit/master/README.md).
<!-- > Live demo [_here_](https://www.example.com). If you have the project hosted somewhere, include the link here. -->

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
    * I opted to go with SVGs because I wanted more exposure with working with them. Specifically, I wanted to play with SVG animation.

## Challenges Encountered and Knowledge Gained
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
- JavaScript

## To-Do
- The UI for this project will be completed in section 12.
