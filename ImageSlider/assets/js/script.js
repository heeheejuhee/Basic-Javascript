function moveNext(){
    var oCurrent = document.querySelector('.current');
    oCurrent.classList.remove('current');

    if(oCurrent.nextElementSibling != null){
        oCurrent.nextElementSibling.classList.add('current');
    }else{
        oCurrent.parentNode.firstElementChild.className = 'current';
    }
    
}

function moveBack(){
    var oCurrent = document.querySelector('.current');
    oCurrent.classList.remove('current');

    if(oCurrent.previousElementSibling != null){
        oCurrent.previousElementSibling.classList.add('current');
    }else{
        oCurrent.parentNode.firstElementChild.className = 'current';
    }
}

var oRight = document.querySelector('.fa-arrow-alt-circle-right');
oRight.addEventListener('click',moveNext);

var oLeft = document.querySelector('.fa-arrow-alt-circle-left');
oLeft.addEventListener('click',moveBack);

// setInterval(moveNext,3000);