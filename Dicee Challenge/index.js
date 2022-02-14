var randomNumber1 = Math.floor(Math.random()*6)+1;  // Random number 1: 1-6
var randomNumber2 = Math.floor(Math.random()*6)+1;  // Random number 2: 1-6

// var images1 = "images/dice" + randomNumber1 + ".png";
// var images2 = "images/dice" + randomNumber2 + ".png";

// document.getElementById("img1").setAttribute("src", images1);
// document.getElementById("img2").setAttribute("src", images2);

document.querySelectorAll("img")[0].setAttribute("src","images/dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice" + randomNumber2 + ".png");

if (randomNumber1>randomNumber2){
  document.querySelector("h1").textContent = "🚩Player 1 Wins!";
} else if (randomNumber1===randomNumber2) {
  document.querySelector("h1").textContent = "Draw!";
} else {
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
