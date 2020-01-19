let dodger = document.getElementById("dodger");

dodger.style.backgroundColor="#FF69B4";
dodger.style.bottom = "0px";
dodger.style.right = "180px";
dodger.style.left = "180px";


document.addEventListener("keydown",function(e){
	if (e.key ==="ArrowLeft"){
		moveDodgerLeft();
	}else if(e.key ==="ArrowRight"){
		moveDodgerRight();
	}

});
	

function moveDodgerLeft(){
	let rightNo = dodger.style.right.replace("px","");
	let leftNumber = dodger.style.left.replace("px","");
	let right = parseInt(rightNo,10);
	let left = parseInt(leftNumber,10);

	if ( left >0)  {
		dodger.style.right=`${right+ 10}px`,
		dodger.style.left=`${left- 10}px`;
	}
}

function moveDodgerRight(){
	let leftNumber = dodger.style.left.replace("px","");
	let rightNo = dodger.style.right.replace("px","");
	let left = parseInt(leftNumber,10);
	let right = parseInt(rightNo,10);

	if ( right >0)  {
		dodger.style.right=`${right- 10}px`;
		dodger.style.left=`${left+ 10}px`;
	}
}