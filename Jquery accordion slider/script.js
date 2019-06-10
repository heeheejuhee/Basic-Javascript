$(function(){
    var sState = 'close';

    // $('.coffee').on('click',function(){
    //     // console.log('im clicked');
    //     if(sState == 'close'){
    //         //open slider
    //         $('.second-ul').animate({top:'0em'},500,function(){

    //         });
    //     }else{
    //         //close slider
    //         $('.second-ul').animate({bottom:'-17em'},500,function(){

    //         });
    //     }
    // });

    // Accordion

    $('.second-ul').hide();
    

    $('.menu p').on('click',function(){
        var sState = $(this).data('state');
        if(sState == 'close'){
            $(this).next().slideDown();
            $(this).data('state','open');
        }else{
            $(this).next().slideUp();
            $(this).data('state','close');
        }
        
    });
    // $('.menu').on('click',function(){
    //     $(this).next().slideDown();
    // });



    
});