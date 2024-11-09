let input = document.getElementById('input');
let btn = document.getElementById("btn");
let wrng = document.querySelector('.wrng'); // Corrected query for class 'wrng'
let guesses = document.getElementById("guesses");

let answer = Math.floor(Math.random() * 100) + 1;
console.log(answer);
let numGuesses = 0;

btn.addEventListener("click", () => {
    guessesNumber();
});

function guessesNumber() {
    let userGuess = parseInt(input.value);

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        wrng.innerHTML = "Enter a number between 1 and 100";
    } else {
        numGuesses++;
        guesses.innerHTML = "No. of Guesses: " + numGuesses;

        if (userGuess > answer) {
            wrng.innerHTML = "You guessed too high!";
            input.value = "";
        } else if (userGuess < answer) {
            wrng.innerHTML = "You guessed too low!";
            input.value = "";
        } else {
            wrng.innerHTML = "Congratulations! You guessed the correct answer!";
            btn.disabled = true;

            setTimeout(() => {
                resetGame();
            }, 5000);
        }
    }
}

function resetGame() {
    numGuesses = 0;
    answer = Math.floor(Math.random() * 100) + 1;
    console.log(answer);
    input.value = "";
    btn.disabled = false;
    wrng.innerHTML = ""; // Clear the message
    guesses.innerHTML = "No. of Guesses: 0"; // Fixed syntax and updated display
}
