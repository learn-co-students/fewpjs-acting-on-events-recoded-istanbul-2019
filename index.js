// Your code here
let dodger=document.getElementById('dodger');

function moveDodgerLeft(){
    let leftNumbers = dodger.style.left.replace("px","");
    let left = parseInt(leftNumbers);

    if(left>0){
        dodger.style.left = `${left-1}px`;
    }
}

function moveDodgerRight(){
    let rightNumbers = dodger.style.left.replace("px","");
    let right = parseInt(rightNumbers);

    if(right>0){
        dodger.style.left = `${right+1}px`;
    }
}

document.addEventListener("keydown",function(e){
    if(e.key === "ArrowRight"){
        moveDodgerRight();
    }

    if(e.key === "ArrowLeft"){
        moveDodgerLeft();
    }
});