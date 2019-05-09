function changeColorBox(){
    //'this' means the object that triggers the event

    // var oTextBox0 = document.querySelector('#textBox0');
   this.parentNode.style.backgroundColor = this.value;
}

var oTextBox0 = document.querySelector('#textBox0');
oTextBox0.addEventListener('blur',changeColorBox);