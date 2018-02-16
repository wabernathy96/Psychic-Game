//Universal variables for the game
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var letGs = [];
var userInput = [];
var losses = 0;
var wins = 0;
var gsLeft = 10;

 
// Computer defines a random letter from the array "letters"
var randLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(randLetter);

// Creates a function for the random letter the computer chooses
var cpuLetter = function(){
    this.randLetter = this.letters[Math.floor(Math.random() * this.letters.length)];
    console.log(randLetter);
}

// Creates a function to update the amount of guesses left
var updateGsLeft = function(){
    // Grabs the div "guessleft" and sets the content equal to the amount of guesses left
    document.getElementById("guessleft").innerHTML = "Guesses Left: " + gsLeft;
    console.log(gsLeft);
}

// Creates a function to update the letters that have been guessed so far
var updateLetGs = function(){
    // Grabs the div "letterguess" and sets the content equal to the letters guessed with a comma in between them
    document.getElementById("letterguess").innerHTML = "Letters Guessed: " + letGs.join(", ");
}

// Creates a function to reset the game
var resetGame = function() {
   // Resets universal variables besides wins and losses
    gsLeft = 10;
    letGs = [];
    userInput = [];
    // Resets the functions and their corresponding divs
    cpuLetter();
    updateGsLeft();
    updateLetGs();
}

// Creates a function when the user presses a key 
document.onkeyup = function(event){
    // When a key is pressed the guesses left go down by 1
    gsLeft--;
    // Creates a variable called "userInput" that:
        // Converts the keycode from a key being pushed into a string equal to the letter for that key
        // Then sets that letter to lowercase
    var userInput = String.fromCharCode(event.keyCode).toLowerCase();
        // Pushes the letter the user guessed from the above function into the empty array "letGs"
        letGs.push(userInput);
        // Runs two of the previously created functions 
        updateLetGs();
        updateGsLeft();

    // If the guesses left are greater than 0 then:
    if(gsLeft > 0){
        // Check if the letter from the user input above is equal to the random letter generated above
        // If this is true:
        if(userInput == randLetter){
            // Add 1 to the wins variable
            wins++;
            // Grab the div "win" and set the content equal to the "wins" variable 
            document.getElementById("win").innerHTML = "Wins: " + wins;
            // Create an alert that says "You're a winner!"
            alert("You're a winner!");
            // Run the "resetGame" function
            resetGame();
        }
        // If the above is false:
       else{
            // Don't allow the letter guessed to be used again
       }
    }
    // Or else, once the amount of guesses left reaches 0:
    else if(gsLeft == 0){
        // Add 1 to the losses variable
        losses ++;
        // Grab the div "loss" and set the content equal to the "losses" variable
        document.getElementById("loss").innerHTML = "Losses: " + losses;
        // Create an alert that says "You're a loser!"
        alert("You're a loser!");
        // Run the "resetGame" function
        resetGame();
    }   

       
}


