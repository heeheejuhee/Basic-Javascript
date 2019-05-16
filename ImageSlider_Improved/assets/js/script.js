function moveNext(){

	var oCurrent = document.querySelector('.current');
	oCurrent.classList.remove('current');

	if(oCurrent.nextElementSibling != null){
		oCurrent.nextElementSibling.classList.add('current');
	}else{
		oCurrent.parentNode.firstElementChild.classList.add('current');
	}

	//Move the dot next

	var oCurrentDot = document.querySelector('.current-dot');
	oCurrentDot.classList.remove('current-dot');

	if(oCurrentDot.nextElementSibling != null){
		oCurrentDot.nextElementSibling.classList.add('current-dot');
	}else{
		oCurrentDot.parentNode.firstElementChild.classList.add('current-dot');
	}
	
}

function movePrevious(){
	var oCurrent = document.querySelector('.current');
	oCurrent.classList.remove('current');

	if(oCurrent.previousElementSibling != null){
		oCurrent.previousElementSibling.classList.add('current');
	}else{
		oCurrent.parentNode.lastElementChild.classList.add('current');
	}

	//Move the dot previous

	var oCurrentDot = document.querySelector('.current-dot');
	oCurrentDot.classList.remove('current-dot');

	if(oCurrentDot.previousElementSibling != null){
		oCurrentDot.previousElementSibling.classList.add('current-dot');
	}else{
		oCurrentDot.parentNode.firstElementChild.classList.add('current-dot');
	}
}

function moveTo(){
	var oCurrent = document.querySelector('.current');
	oCurrent.classList.remove('current');

	var sTarget = this.dataset.target;
	var oTarget = document.querySelector(sTarget);
	oTarget.classList.add('current');

	//current dot moving
	var oCurrentDot = document.querySelector('.current-dot');
	oCurrentDot.classList.remove('current-dot');

	this.classList.add('current-dot');
}

var oRight = document.querySelector('.fa-chevron-circle-right');
oRight.addEventListener('click',moveNext);

var oLeft = document.querySelector('.fa-chevron-circle-left');
oLeft.addEventListener('click',movePrevious);

var oDots = document.querySelector('.dots');

for(var i = 0; i < oDots.children.length; i ++){
	oDots.children[i].addEventListener('click',moveTo);
}







