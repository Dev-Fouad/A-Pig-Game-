'Use strict';

// Selecting Elements
let player0El = document.querySelector('.player--0')
let player1El = document.querySelector('.player--1')
let ScoreOEl = document.getElementById('score--0')
let Score1El = document.getElementById('score--1')
let current0El = document.getElementById('current--0')
let current1El = document.getElementById('current--1')


let DiceEl = document.querySelector('.dice')
let btnNew = document.querySelector('.btn--new')
let btnRoll = document.querySelector('.btn--roll')
let btnHold = document.querySelector('.btn--hold')




// Starting Conditions
ScoreOEl.textContent = 0
Score1El.textContent = 0
DiceEl.classList.add('hidden')

let playing = true

const scores = [ 0 , 0]
let currentscore = 0
let activePlayer = 0
const switchPlayer = function(){

       // Switch to next player
       document.getElementById(`current--${activePlayer}`).textContent = 0
       activePlayer = activePlayer ===  0 ? 1 : 0;
       currentscore = 0
       player0El.classList.toggle('player--active')
       player1El.classList.toggle('player--active')
}

// Rolling Dice functionality
btnRoll.addEventListener('click' , function(){
    if ( playing) {

        //1. Generating Random dice roll
        let dice = Math.trunc(Math.random () * 6) + 1 

        //2. Display dice
        DiceEl.classList.remove('hidden')
        DiceEl. src = `dice-${dice}.png`

        // 3. Check for rolled one
        if (dice !== 1){
        // if rolled dice is not one, add to the current score
            currentscore = currentscore + dice 
            document.getElementById(`current--${activePlayer}`).textContent = currentscore
        }else{
            // Switch to next player
            switchPlayer()
        }

    }
})


btnHold.addEventListener( 'click' , function(){
    if (playing){

        // 1. Add current score to Active player
        scores[activePlayer] = scores[activePlayer]  + currentscore
        // scores[1] = scores[1] + currentscore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

        // 2. Check if player's score is >= 100
        playing = false
        if (scores[activePlayer] >= 20) {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        }else{
        // Switch to the next player
        switchPlayer();
    }
} )
