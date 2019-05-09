function changeColorBox0(){
    var oBox0 = document.querySelector('#box0');
    oBox0.style.backgroundColor = 'red';
}

function changeColorBox1(){
    var oBox1 = document.querySelector('#box1');
    oBox1.style.backgroundColor = 'pink';
}

//Main program
var oBox0 = document.querySelector('#box0');
var oBox1 = document.querySelector('#box1');

oBox0.addEventListener('click',changeColorBox0);
oBox1.addEventListener('click',changeColorBox1);

