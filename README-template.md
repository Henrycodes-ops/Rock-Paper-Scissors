# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

### Screenshot

![](./images/iPhone-13-PRO-127.0.0.1%20(4).png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla Javascript


### What I learned

I learnt how to minimize using divs and also the order property.


```css
.player {
order: 0;
}

.result {
order: 1;
}
.computer {
order: 2;
}

```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}

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

```



### Continued development

I want to focus more on projects that will help me understand DOM Manipulation more




## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Henrycodes-ops)
- Twitter - [@FaloluH77473](https://x.com/FaloluH77473)




