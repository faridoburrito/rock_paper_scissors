
// Asking computer to create a random word that is in the array of strings shown below.
function getComputerChoice(){
    let words = ['rock', 'paper', 'scissors'];
    let word = words[Math.floor(Math.random() * words.length)].toLowerCase();
    return word;
}
// Asking user to input a word
function getPlayerChoice() {

    var words = ['rock', 'paper', 'scissors'];
    let word = prompt("Please enter either rock or paper or scissors.")
    word = word.toLowerCase();

    //If the word the user entered is in the array of strings above it will return the word
    if (words.includes(word)) {
        return word;
    // Otherwise it will recall the function till user inputs one of the 3 words.
    } else {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        return getPlayerChoice();
        }
}

//Creates the game rules and shows the output accordingly.
function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return "It is a tie! Both chose " + playerSelection + ".";
    }
    else if (
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')
        ) {
        return "Computer wins! " + computerSelection + " beats " + playerSelection + "!";
    }
    else {
        return "You win! "  + playerSelection+ " beats " + computerSelection + "!";
    }
}

//Creates a loop where it counts every round and gives you the result of final score at the end
function game(){

    let playerScore = 0;
    let computerScore = 0;

    

    for (let i = 0; i < 5; i++) {

        //counts the rounds
        let count = i + 1;
        console.log(" \n" + "Round " + count);

        

        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        console.log("Computer chose: " + computerSelection);
        console.log("Player chose: " + playerSelection);

        // making it easier to read by creating a new function instead of writing playRound(playerSelection, computerSelection) all the time
        const roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);

        //if the output includes "You win", then it adds on playerScore
        if (roundResult.includes("You win!")) {
            playerScore++;
        }else if (roundResult.includes("Computer wins!")) {   
            computerScore++;
        }

    }

    //shows the final results of the game
    console.log("\nFinal score: ");
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore + " \n ");

    if (playerScore > computerScore) {
        console.log("Congratulations! You won!");
    } else if (computerScore > playerScore) {
        console.log("Better luck next time!");
    } else {
        console.log("No winners found. It is a tie!");
    }

}

game();
