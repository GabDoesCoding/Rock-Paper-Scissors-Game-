// Call out the user variables:
let userRock = document.getElementById("userRock");
let userPaper = document.getElementById("userPaper");
let userScissors = document.getElementById("userScissors");

// Call out the computer variables:
let compRock = document.getElementById("compRock");
let compPaper = document.getElementById("compPaper");
let compScissors = document.getElementById("compScissors");

// Call out the score variables:
let yourScore = document.getElementById("yourScore");
let compScore = document.getElementById("compScore");

// Now here are the results: 
let chosenMoves = document.getElementById("chosenMoves");
let result = document.getElementById("result");

// Store the results
let user = 0;
let computer = 0;

// If computer chooses Rock:
function ComputerChoseRock() {
    compRock.style = "background-color: #70e079; transition: 0.17s;"
    compPaper.style = "background-color: #e07770; transition: 0.17s;"
    compScissors.style = "background-color: #e07770; transition: 0.17s;"
}

// If computer chooses Paper:
function ComputerChosePaper() {
    compRock.style = "background-color: #e07770; transition: 0.17s;"
    compPaper.style = "background-color: #70e079; transition: 0.17s;"
    compScissors.style = "background-color: #e07770; transition: 0.17s;"
}

// If computer chooses Scissors:
function ComputerChoseScissors() {
    compRock.style = "background-color: #e07770; transition: 0.17s;"
    compPaper.style = "background-color: #e07770; transition: 0.17s;"
    compScissors.style = "background-color: #70e079; transition: 0.17s;"
}

// If user clicks the buttons:
function CompButtons() {
    alert("Those buttons are for the computers only! Please use your buttons. ^^")
}


// Now allow this to happen whenever rock is clicked:
userRock.addEventListener("click", function() {
    let randomizer = Math.round(Math.random() * 2) + 1;
    switch (randomizer) {
        case 1: // Rock and Rock
            chosenMoves.innerHTML = "You chose Rock, Computer chose Rock."
            result.innerHTML = "It's a tie!"
            ComputerChoseRock()
            break;
        case 2: // Rock and Paper
            computer += 1;
            compScore.innerHTML = "Computer Score: " + computer;
            chosenMoves.innerHTML = "You chose Rock, Computer chose Paper."
            result.innerHTML = "You lost!"
            ComputerChosePaper()
            break;
        case 3: // Rock and Scissors
            user += 1;
            yourScore.innerHTML = "Your Score: " + user;
            chosenMoves.innerHTML = "You chose Rock, Computer chose Scissors."
            result.innerHTML = "You won!"
            ComputerChoseScissors()
            break;
        default:
            console.log(randomizer);
            break;
    }
})

// Now allow this to happen whenever paper is clicked:
userPaper.addEventListener("click", function() {
    let randomizer = Math.round(Math.random() * 2) + 1;
    switch (randomizer) {
        case 1: // Paper and Paper
            chosenMoves.innerHTML = "You chose Paper, Computer chose Paper."
            result.innerHTML = "It's a tie!"
            ComputerChosePaper()
            break;
        case 2: // Paper and Scissors
            computer += 1;
            compScore.innerHTML = "Computer Score: " + computer;
            chosenMoves.innerHTML = "You chose Paper, Computer chose Scissors."
            result.innerHTML = "You lost!"
            ComputerChoseScissors()
            break;
        case 3: // Paper and Rock
            user += 1;
            yourScore.innerHTML = "Your Score: " + user;
            chosenMoves.innerHTML = "You chose Paper, Computer chose Rock."
            result.innerHTML = "You won!"
            ComputerChoseRock()
            break;
        default:
            console.log(randomizer);
            break;
    }
})

// Now allow this to happen whenever scissors is clicked:
userScissors.addEventListener("click", function() {
    let randomizer = Math.round(Math.random() * 2) + 1;
    switch (randomizer) {
        case 1: // Scissors and Scissors
            chosenMoves.innerHTML = "You chose Scissors, Computer chose Scissors."
            result.innerHTML = "It's a tie!"
            ComputerChoseScissors()
            break;
        case 2: // Scissors and Rock
            computer += 1;
            compScore.innerHTML = "Computer Score: " + computer;
            chosenMoves.innerHTML = "You chose Scissors, Computer chose Rock."
            result.innerHTML = "You lost!"
            ComputerChoseRock()
            break;
        case 3: // Scissors and Paper
            user += 1;
            yourScore.innerHTML = "Your Score: " + user;
            chosenMoves.innerHTML = "You chose Scissors, Computer chose Paper."
            result.innerHTML = "You won!"
            ComputerChosePaper()
            break;
        default:
            console.log(randomizer);
            break;
    }
})