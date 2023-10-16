const playerChoiceElement = document.querySelector(".person-choice");
const computerChoiceElement = document.querySelector(".computer-choice");
const winnerBox = document.querySelector(".winner-box");
const nextButton = document.querySelector(".next-box")

const play = (yourChoice) => {
    const choices = ["rock", "paper", "scissor"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Hide the select box and display result boc=x
    const selectBox = document.querySelector(".select-box");
    selectBox.style.display = "none";

    const resultBox = document.querySelector(".result-box");
    resultBox.style.display = "flex";

    // Update the player's choice element with the chosen image and class
    let selectedPlayerClass = document.querySelector(`.${yourChoice}`);
    playerChoiceElement.querySelector("img").src = `images/${yourChoice}.png`;
    playerChoiceElement.querySelector("img").classList.add("choice");
    playerChoiceElement.classList.add("choiceBox", yourChoice);


    // Update the computer's choice element with the chosen image and class
    let selectedCompClass = document.querySelector(`.${computerChoice}`);
    computerChoiceElement.querySelector("img").src = `images/${computerChoice}.png`;
    computerChoiceElement.querySelector("img").classList.add("choice");
    computerChoiceElement.classList.add("choiceBox", computerChoice);


    //modify result display messages
    const largeHeading = document.querySelector(".result h1");
    const smallHeading = document.querySelector(".result h3");
    const replayButton = document.querySelector(".result-button button");

    if (yourChoice === computerChoice) {

        //when Tie-Up
        largeHeading.innerHTML = "TIE UP";
        replayButton.innerHTML = "REPLAY";
    } else if (
        (yourChoice === "rock" && computerChoice === "scissor") ||
        (yourChoice === "paper" && computerChoice === "rock") ||
        (yourChoice === "scissor" && computerChoice === "paper")
    ) {

        //when Player-Win
        largeHeading.innerHTML = "YOU WON";
        smallHeading.innerHTML = "AGAINST PC";
        displayNextbutton(true);
        replayButton.innerHTML = "PLAY AGAIN";
        updateScore("playerScore");
        playerChoiceElement.classList.add("shadow-box");
    } else {

        //when Computer-win
        largeHeading.innerHTML = "YOU LOST";
        smallHeading.innerHTML = "AGAINST PC";
        replayButton.innerHTML = "PLAY AGAIN";
        displayNextbutton(false);
        updateScore("compScore");
        computerChoiceElement.classList.add("shadow-box");
    }
}

// Update the Scores of Computer And Player
const updateScore = (scoreType) => {
    const displayElement = document.querySelector("." + scoreType);
    const currentScore = Number(displayElement.textContent) + 1;
    localStorage.setItem(scoreType, currentScore);
    displayElement.textContent = currentScore;
}

//display scores on web page
const displayScore = () => {
    const compScore = localStorage.getItem("compScore");
    const playerScore = localStorage.getItem("playerScore");
    if (compScore) {
        const displayCompScore = document.querySelector(".compScore");
        displayCompScore.textContent = localStorage.getItem("compScore");
    }
    if (playerScore) {
        const displayPlayerScore = document.querySelector(".playerScore");
        displayPlayerScore.textContent = localStorage.getItem("yourScore");
    }
}
//display the winner-box
const displayWinner = () => {
    winnerBox.style.display = "flex";

    // Hide other elements as needed
    const headerBox = document.querySelector("header");
    headerBox.style.display = "none";

    const selectBox = document.querySelector(".select-box");
    selectBox.style.display = "none";

    const resultBox = document.querySelector(".result-box");
    resultBox.style.display = "none";
}

//display the next button
const displayNextbutton = (flag) => {

    if (flag) {
        nextButton.style.display = "flex";
    } else {
        nextButton.style.display = "none";
    }
}

//play again
const selectAgain = () => {
    const selectBox = document.querySelector(".select-box");
    selectBox.style.display = "flex";

    const resultBox = document.querySelector(".result-box");
    resultBox.style.display = "none";

    //Remove added classes at chosen elements for removing css 
    computerChoiceElement.classList.remove("choiceBox", "rock", "paper", "scissor", "shadow-box");

    playerChoiceElement.classList.remove("choiceBox", "rock", "paper", "scissor", "shadow-box");

    // Hide the winner-box
    winnerBox.style.display = "none";

    // make header-box visible
    const headerBox = document.querySelector("header");
    headerBox.style.display = "flex";

    //hide next button
    displayNextbutton(false)
}

//display and hide Rules Box
const ruleBox = document.querySelector(".popUp-box");
const handleRulesBox = (action) =>  {
    if (action === "close") {
        ruleBox.style.display = "none";
    } else {
        ruleBox.style.display = "flex";
    }
}

displayScore();