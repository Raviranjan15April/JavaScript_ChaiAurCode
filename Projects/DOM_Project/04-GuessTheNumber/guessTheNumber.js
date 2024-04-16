let randomNumber = parseInt(Math.random()*100 +1);

const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const guessSlot = document.querySelector(".guesses")
const startOver = document.querySelector(".resultParas");
const remaining = document.querySelector(".lastResult"); 
const lowOrHi = document.querySelector(".lowOrHi"); 

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener("click", (e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        ValidateGuess(guess);
    })
}

function ValidateGuess(guess){
    if(isNaN(guess)){
        alter("Please enter valid number");
    } else if(guess < 1){
        alert("Please enter the number more than 0")
    } else if(guess > 100){
        alert("Please enter the number less than 101");
    } else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over, Random Number is ${randomNumber}`);
            endGame();
        } else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    } else if(guess < randomNumber){
        displayMessage(`Number is too low`);
    } else if(guess > randomNumber){
        displayMessage(`Number is too hight`);
    }

}
function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} ,`;
    numGuess++;
    remaining.innerHTML = `${11- numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2> ${message} <h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled' ,'');
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame"> Start New Game </h2>`;
    startOver.append(p);
    playGame = false;
    reStart();
}

function reStart(){
    const newGame = document.querySelector('#nreGame');
    newGame.addEventListener("click", (e)=>{
        e.defaultPrevented();
        randomNumber = parseInt(Math.random()*100 +1);
        prevGuess.length = 0;
        numGuess = 1;
        remaining.innerHTML = `${11- numGuess}`;
        guessSlot.innerHTML = '';
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);
        playGame = true;
    })
}


