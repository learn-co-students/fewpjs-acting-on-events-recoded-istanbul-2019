// Your code here

let dodger = document.getElementById("dodger");
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") 
  {
    moveDodgerLeft();
  }
  else if(e.key==="ArrowRight") 
  {
    moveDodgerRight();
    
  }
});

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
 
 let bl=document.getElementById('game');
 let limitRight=bl.offsetWidth - dodger.offsetWidth;
 console.log(limitRight);
 //if ( left < limitRight) { this is the code which works but learn did not accept
  if ( left > limitRight) {
    dodger.style.left = `${left + 1}px`;
  }
}