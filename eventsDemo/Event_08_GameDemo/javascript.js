function changeColorBox(){
    var sBoxColor = this.children[0].innerHTML;
    this.style.backgroundColor = sBoxColor;

    var oInput = this.children[1];

    if(oInput.value == sBoxColor){
        this.style.border = 'thick green solid';
        iScore++;
    }else{
        this.style.border = 'thick red solid';
    }
    //output the score back to html
    var oScore = document.querySelector('#score');
    oScore.innerHTML = iScore;
}

//Main program --------------------------------
var iScore = 0; //global bucket to keep score

var oContainer = document.querySelector('#container');
var aBoxes = oContainer.children;

for(var i = 0; i < aBoxes.length; i ++){
    aBoxes[i].addEventListener('click',changeColorBox);
}
