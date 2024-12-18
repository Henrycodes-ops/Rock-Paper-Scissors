const closeBtn = document.getElementById("closeBtn");
const rules = document.getElementById("rules");
const hidden = document.querySelector(".hidden");
const modalOverlay = document.querySelector(".modal-overlay");
const buttons = document.querySelectorAll(".icon");
const scoreCount = document.getElementById("scoreCount");
const gameContainer = document.querySelector(".game-container");
const playerPick = document.querySelector(".playerContainer");
const iconContainer = document.querySelector(".image-div");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const rock = document.getElementById("rock");
const spanScore = document.querySelector("#resultText");
const housePicked = document.querySelector("#house-pick");
const playAgainBtn = document.querySelector(".playAgainBtn");
const batteryStatus = document.querySelector("#battery-status");

// Bonus Section
const bonusButtons = document.querySelectorAll(".bonusBtn");
const bonusButton = document.querySelector("#bonusRule");
const bonusHidden = document.querySelector(".bonusHidden");
const bonusCloseBtn = document.getElementById("bonusCloseBtn");
const bonusModalOverlay = document.querySelector(".bonus-modal-overlay");
const bonusGameSection = document.querySelector(".bonus-game-section");
const showBonusSection = document.querySelector("#showBonusSection");
const playAgainBtnBonus = document.getElementById("playAgainBtnBonus");
const back = document.querySelector("#back");
const hide = document.querySelector(".hide");

// Function to get computer choice
const getComputerChoice = () => {
  const rpsChoices = ["rock", "paper", "scissors"];
  return rpsChoices[Math.floor(Math.random() * 3)];
};
const getComputerChoiceBonus = () => {
  const rpsChoices = ["rock", "paper", "scissors", "lizard", "spock"];
  return rpsChoices[Math.floor(Math.random() * 5)];
};

// Modal Toggle
rules.addEventListener("click", () => {
  hidden.classList.toggle("hidden");
});
bonusButton.addEventListener("click", () => {
  bonusHidden.classList.remove("bonusHidden");
});

showBonusSection.addEventListener("click", function () {
  bonusButton.classList.remove("none");
  iconContainer.classList.add("none");
  bonusGameSection.classList.remove("bonus-game-none");
  playAgainBtn.classList.add("none");
  rules.classList.add("none");
  gameContainer.classList.add("none");
  scoreCount.innerText = 0;
  back.classList.remove("none");
  hide.classList.remove('hide')
});

back.addEventListener("click", function () {
  bonusButton.classList.add("none");
  bonusGameSection.classList.add("bonus-game-none");
  rules.classList.remove("none");
  iconContainer.classList.remove("none");
  back.classList.add("none");
  gameContainer.classList.add("none");
  playAgainBtn.classList.remove("none");
  hide.classList.add('hide')
});

closeBtn.addEventListener("click", () => {
  modalOverlay.classList.add("none");
});
bonusCloseBtn.addEventListener("click", () => {
  bonusModalOverlay.classList.add("none");
});

window.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.classList.add("none");
  }
});
window.addEventListener("click", (event) => {
  if (event.target === bonusModalOverlay) {
    bonusModalOverlay.classList.add("none");
  }
});

// Game Logic
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const computerChoice = getComputerChoice();

    // Display player's choice
    playerPick.innerHTML = `<button class='icon' id='${playerChoice}'>${button.innerHTML}</button>`;
    playerPick.classList.add("active");
    iconContainer.classList.add("none");
    gameContainer.classList.remove("none");
    playAgainBtnBonus.classList.add("none");

    // Determine score
    let score = 0;
    if (playerChoice === computerChoice) {
      score = 0;
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      score = 1;
    } else {
      score = -1;
    }

    // Show result
    let resultText = "";
    if (score === 1) resultText = "You Win!";
    else if (score === 0) resultText = "It's a Draw!";
    else resultText = "You Lose!";
    spanScore.innerHTML = `<span>${resultText}</span>`;

    // Update score
    scoreCount.innerText = parseInt(scoreCount.innerText) + score;

    // Display computer choice
    housePicked.innerHTML = `<button class='icon' id='${computerChoice}'>${
      document.getElementById(computerChoice).innerHTML
    }</button>`;
  });
});
// Bonus Game Section
bonusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const computerChoice = getComputerChoiceBonus();

    // Display player's choice
    playerPick.innerHTML = `<button class='bonusicon' id='${playerChoice}'>${button.innerHTML}</button>`;
    playerPick.classList.add("active");
    iconContainer.classList.add("none");
    gameContainer.classList.remove("none");
    bonusGameSection.classList.add("hidden");
    playAgainBtnBonus.classList.remove("none");

    // Determine score
    let score = 0;
    if (playerChoice === computerChoice) {
      score = 0;
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "rock" && computerChoice === "lizard") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "paper" && computerChoice === "spock") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "scissors" && computerChoice === "lizard") ||
      (playerChoice === "lizard" && computerChoice === "spock") ||
      (playerChoice === "lizard" && computerChoice === "paper") ||
      (playerChoice === "spock" && computerChoice === "rock") ||
      (playerChoice === "spock" && computerChoice === "scissors")
    ) {
      score = 1;
    } else {
      score = -1;
    }

    // Show result
    let resultText = "";
    if (score === 1) resultText = "You Win!";
    else if (score === 0) resultText = "It's a Draw!";
    else resultText = "You Lose!";
    spanScore.innerHTML = `<span>${resultText}</span>`;

    // Update score
    scoreCount.innerText = parseInt(scoreCount.innerText) + score;

    // Display computer choice
    housePicked.innerHTML = `<button class='bonusicon' id='${computerChoice}'>${
      document.getElementById(computerChoice).innerHTML
    }</button>`;
  });
});

// Play Again
playAgainBtn.addEventListener("click", () => {
  gameContainer.classList.add("none");
  iconContainer.classList.remove("none");
  playerPick.classList.remove("active");
});
playAgainBtnBonus.addEventListener("click", () => {
  gameContainer.classList.add("none");
  iconContainer.classList.add("none");
  playerPick.classList.remove("active");
  bonusGameSection.classList.remove("hidden");
});

// Battery Status
if ("getBattery" in navigator) {
  navigator.getBattery().then((battery) => {
    const updateBatteryStatus = () => {
      const chargingStatus = battery.charging ? "⚡" : "❗";
      batteryStatus.textContent = `${(battery.level * 100).toFixed(
        0
      )}%, ${chargingStatus}`;
      if (battery.level > 0.5) {
        batteryStatus.style.backgroundColor = "green";
      } else if (battery.level > 0.2) {
        batteryStatus.style.backgroundColor = "orange";
        batteryStatus.style.color = "black";
      } else {
        batteryStatus.style.backgroundColor = "red";
      }
    };

    updateBatteryStatus();
    battery.addEventListener("chargingchange", updateBatteryStatus);
    battery.addEventListener("levelchange", updateBatteryStatus);
  });
} else {
  batteryStatus.textContent =
    "Battery Status API is not supported by your browser.";
}
