'Use strict';

// Selecting Elements
let ScoreOEl = document.getElementById('score--0')
let Score1El = document.getElementById('score--1')
let btnNew = document.querySelector('.btn--new')
let btnRoll = document.querySelector('.btn--roll')
let btnHold = document.querySelector('.btn--hold')
let DiceEl = document.querySelector('.dice')
let current0El = document.getElementById('current--0')


// Starting Conditions
ScoreOEl.textContent = 0
Score1El.textContent = 0
let currentscore = 0
DiceEl.classList.add('hidden')


// Rolling Dice functionality
btnRoll.addEventListener('click' , function(){

    //1. Generating Random dice roll
    let dice = Math.trunc(Math.random () * 6) + 1 

    //2. Display dice
    DiceEl.classList.remove('hidden')
    DiceEl. src = `dice-${dice}.png`

    // 3. Check for rolled one
    if (dice !== 1){
    // if rolled dice is not one, add to the current score
        currentscore = currentscore + dice 
        current0El.textContent = currentscore
    }else{
        
    }


})
