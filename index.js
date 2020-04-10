// Your code here
let dodger = document.getElementById("dodger");
let game = document.getElementById("game");

dodger.style.backgroundColor = "#000000";

dodger.style.backgroundColor = "#FF69B4";


function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}


function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  let gameWidth = 400;
  let dodgerWidth = 40;

  if (left < gameWidth - dodgerWidth) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});