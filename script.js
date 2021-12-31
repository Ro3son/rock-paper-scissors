const buttons = document.querySelectorAll("button");

function computerPlay() {
  let choices = ["rock", "paper", "scissor"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  let resultado = "";

  if (
    (playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "scissor" && computerSelection == "rock")
  ) {
    resultado =
      "Player 1: " +
      playerSelection +
      "<br><br>Computer: " +
      computerSelection +
      "<br><br>Rock vence Scissor!";
  } else if (
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "rock" && computerSelection == "paper")
  ) {
    resultado =
      "Player 1: " +
      playerSelection +
      "<br><br>Computer: " +
      computerSelection +
      "<br><br>Paper vence Rock!";
  } else if (
    (playerSelection == "paper" && computerSelection == "scissor") ||
    (playerSelection == "scissor" && computerSelection == "paper")
  ) {
    resultado =
      "Player 1: " +
      playerSelection +
      "<br><br>Computer: " +
      computerSelection +
      "<br><br>Scissor vence paper!";
  } else if (playerSelection == computerSelection) {
    resultado = "Joguem Novamente!";
  }

  document.getElementById("demo").innerHTML = resultado;
}

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    playRound(button.value);
  });
});

const content = document.querySelector(".content");
const heading = document.createElement("h1");
heading.textContent = "Rock Paper Scissors";
content.appendChild(heading);

var h1Style = document.querySelector("h1").style;
h1Style.color = "black";
h1Style.fontFamily = "monospace";
h1Style.fontSize = "7em";
h1Style.textAlign = "center";