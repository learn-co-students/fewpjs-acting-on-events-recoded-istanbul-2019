// Your code here
let dodger = document.getElementById("dodger");
let game = document.getElementById("game");
let width = game.width;
let widthNo = parseInt(width, 10);

function moveDodgerLeft() {
    let leftNo = dodger.style.left.replace("px", "");
    let leftNumber = parseInt(leftNo, 10);
    if (leftNumber > 0) {
        dodger.style.left = leftNumber - 1 + "px";
    }
}

function moveDodgerRight() {
    let leftRightNo = dodger.style.left.replace("px", "");
    let leftInt = parseInt(leftRightNo, 10);
    if (leftInt < 360) dodger.style.left = leftInt + 1 + "px";
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        goToLeft();
    }

    if (e.key === "ArrowRight") {
        goToRight();
    }
});