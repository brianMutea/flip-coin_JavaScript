
// Solution to task 2

const tossCoinBtn = document.querySelector("#toss-coin");
const coinContainer = document.querySelector('.coin-imgs');
const resetBtn = document.querySelector('#reset');
// const compHeadGuess = document.querySelector('#c-guess_head');
// const compTailGuess = document.querySelector('#c-guess_tail');
const personHeadGuess = document.querySelector('#p-guess_head');
const playerGuessBtns = document.querySelectorAll('#p-guess');

const compGuess = document.querySelector('#comp-guess');


let head = 0;
let tail = 0;
let coinSide = 0;
let count = 0;

tossCoinBtn.addEventListener('click', () => {
  let coinSide = Math.floor(Math.random() * 2);
  coinContainer.style.animation = "none";
  if (coinSide) {
    setTimeout(() => {
      coinContainer.style.animation = "spin-head 500ms forwards";
             
    }, 1500);
    head++;
    
    // console.log(head);
  } else {
    setTimeout(() => {
      coinContainer.style.animation = "spin-tail 500ms forwards";
    }, 1500);
    tail++;
  }
  count++;
  computerGuess();
  console.log(tail, count);
});




let computerGuess = () => {
  let compRandom = Math.floor(Math.random() * 2);
  if (compRandom) {
    compRandom = 'Tails';
  } else {
    compRandom = 'Head';
  }
  setTimeout(() => {
    compGuess.textContent = `Computer guessed ${compRandom}`;
    
  }, 2500);  
  
}

let player_guess = false;
const playerGuess = () => {
  playerGuessBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      let guess = e.target;
      if (guess.textContent == 'Tail') {
        guess.style.backgroundColor = "green";
        
      } else {
        guess.style.backgroundColor = "green"; 
      }
    })
    player_guess = true;
  })
}
playerGuess();
