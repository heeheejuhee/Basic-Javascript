function makeStars(iNum){
	var sStars = "";
	for(var iCount=0; iCount<iNum; iCount++){
		sStars += "😎";
	}
	return sStars;//string of stars
}

function drawStars(){
	var oSelect = document.querySelector('#box');
	var sSelectValue = oSelect.value;

	//get number of stars to draw
	var oStarInput = document.querySelector('#stars');
	var sStarInputValue = oStarInput.value;
	var iStars = parseInt(sStarInputValue);
	console.log(sSelectValue);

	var oDiv = document.querySelector('#' + sSelectValue);
	oDiv.innerHTML = makeStars(iStars);
}

//---------------------------------------------
var oDrawButton = document.querySelector('#draw');
oDrawButton.addEventListener('click',drawStars);
