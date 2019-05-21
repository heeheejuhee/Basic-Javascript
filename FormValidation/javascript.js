function checkFilled(){

	var isValid = false; //boolean
	var sValue = this.value;

	if(sValue == ''){
		//report error
		this.nextElementSibling.innerHTML = 'Please fill it in';
		this.nextElementSibling.className = 'message-error';
	}else{
		//say thank you
		this.nextElementSibling.innerHTML = 'Thank you';
		this.nextElementSibling.className = 'message-success';
		isValid = true;
	}

	return isValid;

}

function checkAlphabetic(){
	
	var isValid = false;

	var sValue = this.value;
	if(sValue == ''){
		//report error
		this.nextElementSibling.innerHTML = 'Please fill it in';
		this.nextElementSibling.className = 'message-error';
	}else{
		//check alphabetic here
		var oAphabeticExp = /^[A-Za-z]*$/;
		var bTest = oAphabeticExp.test(sValue);
		if(bTest == false){
			//say Letters only
			this.nextElementSibling.innerHTML = 'Letters only';
			this.nextElementSibling.className = 'message-error';
		}else{
			//say thank you
			this.nextElementSibling.innerHTML = 'Thank you';
			this.nextElementSibling.className = 'message-success';
			isValid = true;
		}
	}

	return isValid;
}

function checkEmail(){

	var isValid = false;

	var sValue = this.value;
	if(sValue == ''){
		//report error
		this.nextElementSibling.innerHTML = 'Please fill it in';
		this.nextElementSibling.className = 'message-error';
	}else{
		//check alphabetic here
		var oEmailExp = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
		var bTest = oEmailExp.test(sValue);
		if(bTest == false){
			//say Letters only
			this.nextElementSibling.innerHTML = 'Invalid email';
			this.nextElementSibling.className = 'message-error';
		}else{
			//say thank you
			this.nextElementSibling.innerHTML = 'Thank you';
			this.nextElementSibling.className = 'message-success';
			isValid = true;
		}
	}

	return isValid;

}

function checkAll(e){

	e.preventDefault();
	 
	var isFirstNameValid = checkAlphabetic.call(oFirstNameInput);
	var isLastNameValid = checkAlphabetic.call(oLastNameInput);
	var isEmailValid = checkEmail.call(oEmailInput);
	var isPasswordValid = checkFilled.call(oPasswordInput);

	var isAllValid = isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid
	
	if(isAllValid == false){

		e.preventDefault();
		
	}


}


//------- Main program
var oFirstNameInput = document.querySelector('#firstName');
oFirstNameInput.addEventListener('blur',checkAlphabetic);

var oLastNameInput = document.querySelector('#lastName');
oLastNameInput.addEventListener('blur',checkAlphabetic);

var oEmailInput = document.querySelector('#email');
oEmailInput.addEventListener('blur',checkEmail);

var oPasswordInput = document.querySelector('#password');
oPasswordInput.addEventListener('blur',checkFilled);

var oForm = document.querySelector('form');
oForm.addEventListener('submit',checkAll);







