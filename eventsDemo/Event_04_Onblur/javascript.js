function changeColorBox0(){
    var oTextBox0 = document.querySelector('#textBox0');
    oTextBox0.parentNode.style.backgroundColor = oTextBox0.value;
}
function changeColorBox1(){
    var oTextBox1 = document.querySelector('#textBox1');
    oTextBox1.parentNode.style.backgroundColor = oTextBox1.value;
}
function changeColorBox2(){
    var oTextBox2 = document.querySelector('#textBox2');
    oTextBox2.parentNode.style.backgroundColor = oTextBox2.value;
}


//Main program

var oTextBox0 = document.querySelector('#textBox0');
oTextBox0.addEventListener('blur',changeColorBox0);

var oTextBox1 = document.querySelector('#textBox1');
oTextBox1.addEventListener('blur',changeColorBox1);

var oTextBox2 = document.querySelector('#textBox2');
oTextBox2.addEventListener('blur',changeColorBox2);