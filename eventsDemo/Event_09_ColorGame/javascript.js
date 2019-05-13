function turnontheColor (){
    this.style.backgroundColor = this.innerHTML;
}

var oContainer = document.querySelector('#container');
for(var i = 0; i < oContainer.childNodes.length; i ++){
    oContainer.children[i].addEventListener('click',turnontheColor);
}