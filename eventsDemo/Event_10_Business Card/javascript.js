function makeCard(){
	var oNameInput = document.querySelector('#nameInput');
	var oName = document.querySelector('#name');
	oName.innerHTML = oNameInput.value;
}

//---------------------------------------------
var oSubmitButton = document.querySelector('#submit');

oSubmitButton.addEventListener('click',makeCard);