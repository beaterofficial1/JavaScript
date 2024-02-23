
let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

// Previous Guesses
let prevGuess = [];
// Attempts
let numGuess = 1;
// Allow true or false
let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess < 1) {
        alert('Please enter a number more than 1')
    } else if (guess > 100) {
        alert('Please enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 10) {
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('You Guessed it right')
        endGame()
    } else if (guess < randomNumber) {
        displayMessage('Number is TOO Low')
    } else if (guess > randomNumber) {
        displayMessage('Number is TOO High')
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.style.backgroundColor = 'crimson'
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        numGuess = 1
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })
}
