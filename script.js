// buttons
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');
// dice image
const diceImg = document.querySelector('.dice');
diceImg.style.display = 'none';

// variables
let currentScore = 0;
let activePlayer = 0;
let score =[0, 0];
let gameOver = true;

// swicht function
const switchPlayer = () => {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
}

// roll btn 
rollBtn.addEventListener('click', () => {
    if (gameOver) {
        diceImg.style.display = 'block';
        const random = Math.floor(Math.random() * 6 + 1);
        diceImg.src = `./dice-${random}.png`;
        console.log(random)
        if (random !== 1) {
            currentScore += random;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        } 
    }
       
})

// hold btn 
holdBtn.addEventListener('click', () => {
    if (gameOver) {
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
        if(score[activePlayer] >= 20) {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            gameOver = false;

        } else {
            switchPlayer();
        }
    }
})

// new btn 
newGameBtn.addEventListener('click', () => {
    currentScore = 0;
    activePlayer = 0;
    score =[0, 0];
    gameOver = true;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    document.getElementById('score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
})

