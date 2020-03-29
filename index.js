// Your code here
let dodger=document.getElementById('dodger');

function rightArrowKey(){
    let rightNumbers = dodger.style.left.replace("px","");
    let right = parseInt(rightNumbers);

    if(right>0){
        dodger.style.left = `${right+1}px`;
    }
}

document.addEventListener("keydown",function(e){
    if(e.key === "ArrowRight"){
        rightArrowKey();
    }
});