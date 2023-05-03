let arr = ['s', 'p', 'r']
alert('we are playing sissor paper rock game')
let round = 1;
let userGuess = 0;
let computerGuess = 0;
while (round <= 3) {
  let userInput = prompt('enter your guess')
  let computerInput = arr[(Math.floor(Math.random() * 3))]
  if ((userInput == "s" && computerInput == "p") || (userInput == "p" && computerInput == "r") || (userInput == "r" && computerInput == "s")) {
    userGuess++;
  } 
     else if((userInput == "s" && computerInput == "s") || (userInput == "p" && computerInput == "p") || (userInput == "r" && computerInput == "r")) {
    userGuess=userGuess;
    computerGuess=computerGuess;
    }
  else {
    computerGuess++;
  }
  
  alert("you:"+userInput+" " +userGuess+"computer:"+computerInput+ " "+computerGuess)
  round++;
}
  if (computerGuess > userGuess) {
    alert("opps! you lose");
  } else {
    alert("congrats! you won");
  }

