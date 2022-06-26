
// Solution to task 2

const tossCoinBtn = document.querySelector("#toss-coin");
const coinContainer = document.querySelector('.coin-imgs');
const resetBtn = document.querySelector('#reset');
// const compHeadGuess = document.querySelector('#c-guess_head');
// const compTailGuess = document.querySelector('#c-guess_tail');
const personHeadGuess = document.querySelector('[data-head]');
const personTailGuess = document.querySelector('[data-tail]');
const playerGuessBtns = document.querySelectorAll('#p-guess');
const compScore = document.querySelector('[data-comp-score');
const personScore = document.querySelector('[data-person-score');
const compGuess = document.querySelector('#comp-guess');



let count = 0;
let coinSide = 0;
let comp_score = 0;
let person_score = 0;

function getCoinSide() {
  coinSide = Math.floor(Math.random() * 2);
  return coinSide;
}
class Player {
  constructor() {
   this.head = 0;
   this.tail = 0;
   this.coinSide = 0;
   
   this.player_score;
  //  this.comp_score;
  }

  playerGuess(guess) {
    coinSide = getCoinSide();
    if (guess === 1) {
      personHeadGuess.style.backgroundColor = "red";
      personTailGuess.style.backgroundColor = "";
      
      
    } else {
      personTailGuess.style.backgroundColor = "blue"; 
      personHeadGuess.style.backgroundColor = "";
      
    }  
   
    
  }

  computerGuess() {
    let compRandom = Math.floor(Math.random() * 2);
    setTimeout(() => {
      setTimeout(() => {
        compGuess.textContent = `Computer guessed ${compRandom === 0 ? 'Tails' : 'Head'}`; 
        document.getElementById('guessing').textContent = '';
      }, 500)

      document.getElementById('guessing').textContent = `Guessing...`;
      
    }, 3000); 
    return compRandom;
    
   
  }
}

const personPlayer = new Player();
const computerPlayer = new Player();



// player Guess
playerGuessBtns.forEach(btn => {
  
  btn.addEventListener('click', (e) => {
    let guessBtnValue = e.target.textContent;
    guessBtnValue === 'Tail' ? guessBtnValue = 0 : guessBtnValue = 1;
    personPlayer.playerGuess(guessBtnValue);
    
    // get computer and coin side values
    let [compguess, coinSide] = tossCoin();
    coinContainer.style.animation = "none";
    if (coinSide === compguess) {
      setTimeout(() => {
        comp_score = comp_score + 1;
        compScore.textContent = comp_score;
            
      }, 4000);
 
    } else if (coinSide === guessBtnValue) {
      person_score = person_score + 1;
      personScore.textContent = person_score;
    } else if (coinSide === compguess && coinSide === guessBtnValue && guessBtnValue === compguess) {
      console.log("tied");
    }

    coinContainer.classList.remove('hide-coin');
    
  })
    
});

function displayScores() {
  console.log(computerPlayer.computerGuess());
  
}


tossCoinBtn.addEventListener('click', () => {  
  tossCoin();
});



function tossCoin() {
  coinSide = getCoinSide();
  coinContainer.style.animation = "none";
  if (coinSide) {
    setTimeout(() => {
      coinContainer.style.animation = "spin-head 5s forwards";
      setTimeout(() => {
        
        coinContainer.classList.add('hide-coin');
      }, 1200)
    }, 300);
   
    
    
  } else {
    setTimeout(() => {
      coinContainer.style.animation = "spin-tail 5s forwards";
      setTimeout(() => {

        coinContainer.classList.add('hide-coin');
      }, 1200)
    }, 300);
    
  }
  
  let comguess = computerPlayer.computerGuess();
  let arr = [comguess, coinSide];
  return arr;
  
    
}
const reset = () => {
  compScore.textContent = ''
  personScore.textContent = '';
  coinContainer.classList.remove('hide-coin');
  personTailGuess.style.backgroundColor = ""; 
  personHeadGuess.style.backgroundColor = "";
  compGuess.textContent = ''

}





// Extra ////////////////

//grab selection of head or tail
const buttons = document.querySelectorAll("button");
//set values for heads and tails
let heads = 1;
let tails = 0;
let userScore = 0;
let computerScore = 0;

function displaySelections(user, computer) {
  const playerSelection = document.querySelector("#player-selection");
  const computerSelection = document.querySelector("#computer-selection");
  if (user === "heads") {
    playerSelection.style.color = "green";
  }
  if (user === "tails") {
    playerSelection.style.color = "blue";
  }
  if (computer === "heads") {
    computerSelection.style.color = "green";
  }
  if (computer === "tails") {
    computerSelection.style.color = "blue";
  }
  playerSelection.innerHTML = `${user}`;
  computerSelection.innerHTML = `${computer}`;
}

function displayRandom(random) {}

function tallyScore(random, userPick, computerPick) {
  //select scoreboard from DOM
  const playerDisplay = document.querySelector("#player-score");
  const computerDisplay = document.querySelector("#computer-score");
  const winner = document.querySelector("#winner");

  if (userPick === random) {
    userScore++;
  }
  if (computerPick === random) {
    computerScore++;
  }
  playerDisplay.textContent = `${userScore}`;
  computerDisplay.textContent = `${computerScore}`;

  if (userScore === 5 && computerScore === 5) {
    winner.innerHTML = `<h1>It's a Tie</h1>`;
  } else if (userScore === 5) {
    winner.innerHTML = `<h1>You Win!!!</h1>`;
  } else if (computerScore === 5) {
    winner.innerHTML = `<h1>Computer Wins!!!</h1>`;
  }
}

//add an event listener to the buttons
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    //Computer randomly select heads or tails
    const random = Math.round(Math.random());
    //Computer selects a random 'heads' or 'tails
    const computerPick = Math.round(Math.random());
    //Record computers selection
    let computerSelection;
    if (computerPick === 1) {
      computerSelection = "heads";
    } else {
      computerSelection = "tails";
    }

    const userSelection = e.target.id;
    let userPick;

    if (userSelection === "heads") {
      userPick = 1;
    } else if (userSelection === "tails") {
      userPick = 0;
    }

    displaySelections(userSelection, computerSelection);
    displayRandom(random);

    //Adds the score of the player and computer
    setTimeout(function () {
      tallyScore(random, userPick, computerPick);
    });
  });
});
