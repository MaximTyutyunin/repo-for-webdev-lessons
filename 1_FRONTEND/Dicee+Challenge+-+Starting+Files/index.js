const diceImage1 = document.querySelector(".img1");
const diceImage2 = document.querySelector(".img2");
const header = document.querySelector("h1");

function randNum() {
  return Math.floor(Math.random() * 6) + 1;
}
let randomNumber1 = randNum();
let randomNumber2 = randNum();

// Update the src attribute to the new dice image based on the random number
diceImage1.setAttribute("src", `./images/dice${randomNumber1}.png`);
diceImage2.setAttribute("src", `./images/dice${randomNumber2}.png`);

if (randomNumber1 === randomNumber2) {
  header.textContent = "Draw!!";
} else if (randomNumber1 < randomNumber2) {
  header.innerText = "Right wins";
} else {
  header.innerHTML = "Left wins";
}
