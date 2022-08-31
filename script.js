let restartGame = document.getElementById('restart');

function play() {
    let computerChoices = ['rock', 'paper', 'scissors'];
    let computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    let playerSelection = prompt();
    

    if (playerSelection === "rock" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "scissors") {

        console.log(playerSelection);
        console.log(computerSelection);

        console.log('It\'s a tie!');

    } else if (playerSelection === "rock" && computerSelection === "paper") {

        console.log(playerSelection);
        console.log(computerSelection);

        console.log('You lost, Computer won!');

    } else if (playerSelection === "rock" && computerSelection === "scissors") {

        console.log(playerSelection);
        console.log(computerSelection);

        console.log('You won, Computer lost!');

    } else if (playerSelection === "paper" && computerSelection === "scissors") {

        console.log(playerSelection);
        console.log(computerSelection);

        console.log('You lost, Computer won!');

    } else if (playerSelection === "paper" && computerSelection === "rock") {

        console.log(playerSelection);
        console.log(computerSelection);

        console.log('You won, Computer lost!');

    } else if (playerSelection === "scissors" && computerSelection === "rock") {

        console.log(playerSelection);
        console.log(computerSelection);

        console.log('You lost, Computer won!');

    } else if (playerSelection === "scissors" && computerSelection === "paper") {

        console.log(playerSelection);
        console.log(computerSelection);

        console.log('You won, Computer lost!');

    } else {
        console.log('Make sure you type the correct choices [rock, paper, scissors]');
    }

}

restartGame.addEventListener('click', play);