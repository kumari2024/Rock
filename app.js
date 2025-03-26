let userScore = 0, compScore = 0;
const choices = document.querySelectorAll(".choice"),
      msg = document.querySelector("#msg"),
      userScorePara = document.querySelector("#user-score"),
      compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];

const updateScore = (isUserWin, userChoice, compChoice) => {
    isUserWin ? userScore++ : compScore++;
    (isUserWin ? userScorePara : compScorePara).innerText = isUserWin ? userScore : compScore;
    msg.innerText = isUserWin ? `You win! Your ${userChoice} beats ${compChoice}` 
                              : `You lost! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = isUserWin ? "green" : "red";
};

const playgame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        msg.innerText = "Game was a Draw. Play again.";
        msg.style.backgroundColor = "rgb(10, 14, 14)";
    } else {
        updateScore(
            (userChoice === "rock" && compChoice === "scissors") ||
            (userChoice === "paper" && compChoice === "rock") ||
            (userChoice === "scissors" && compChoice === "paper"),
            userChoice, compChoice
        );
    }
};

choices.forEach(choice => choice.addEventListener("click", () => playgame(choice.id)));


