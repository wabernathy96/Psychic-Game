//Universal variables for the game
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wrongLetter = [];
var userInput = [];
var wins = 0;
var losses = 0;
var guessLeft = 10;
// var randLetter;

//Start the game by choosing a random letter 
// alert ("Try to guess what letter I'm thinking of!");


var randLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(randLetter);



// document.getElementById("win").textContent = wins;

//Player guesses letter
document.getElementById("guess").textContent = userInput; 

    document.onkeyup = function(event){
        userInput = event.key;
        console.log(userInput);

        //Letter returns T/F
        if (userInput === randLetter){
            alert ("You got it!");

        }
    }


    //T = Win+1, Reset

    //F = Display letter, guess left -1, Guess again

        //@10 guesses = Loss +1, Reset cpu letter 

        


