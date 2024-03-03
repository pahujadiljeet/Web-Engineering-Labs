// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Function to check the user's guess
function checkGuess() {
    // Get the user's guess from the input field
    var guessInput = document.getElementById("guessInput").value;
    
    // Convert the guess to a number
    var guess = parseInt(guessInput);
    
    // Get the message element
    var message = document.getElementById("message");
    
    // Check if the guess is correct, too high, or too low
    if (guess === randomNumber) {
        message.textContent = "Congratulations! You guessed the number!";
    } else if (guess < randomNumber) {
        message.textContent = "Too low! Try again.";
    } else {
        message.textContent = "Too high! Try again.";
    }
    
    // Clear the input field after checking the guess
    document.getElementById("guessInput").value = "";
}
