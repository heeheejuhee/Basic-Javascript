function changeColorBox0(){
    var oTextBox0 = document.querySelector('#textBox0');
    var oBox0 = document.querySelector('#box0');
    oTextBox0.parentNode.style.backgroundColor = oTextBox0.value;
}
function changeColorBox1(){
    var oTextBox1 = document.querySelector('#textBox1');
    var oBox1= document.querySelector('#box1');
    oBox1.style.backgroundColor = oTextBox1.value;
}

//Main program --------------------------------
var oBox0 = document.querySelector('#box0');
oBox0.addEventListener('click',changeColorBox0);

var oBox1 = document.querySelector('#box1');
oBox1.addEventListener('click',changeColorBox1);