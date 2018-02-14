//Universal variables for the game
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var losses = [];
var gsLeft = 10;

 
// alert ("Try to guess what letter I'm thinking of!");

var randLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(randLetter);

function userInput (){
    var userInput = document.getElementById("guess");
        userInput.onkeyup = function(userGuess){
            for(i=0;i<letters.length;i++){
                if(userInput == randLetter){
                    var wins = document.getElementById("win");
                    for(j=0;j=wins;j++){
                        var winSet = [j] + 1;
                        var addWin = document.createElement("wins")
                        addWin.innerHTML = winSet;
                        wins.appendChild(addWin);
                    }
                    alert("You guessed correctly!");
                }
                else{
                    
                }
            }
        }
}


