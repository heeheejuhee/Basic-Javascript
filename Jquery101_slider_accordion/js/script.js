$(function(){
    //-------Slider
    var sState = 'close'; 
    // = isState = false

    $('#slide-button').on('click',function(){

        if(sState == 'close'){
            //open slider
            $('header').animate({left:'0em'},500,function(){
                $('#slide-button .fa').removeClass('fa-arrow-circle-right')
                                      .addClass('fa-arrow-circle-left');

            //update state
            sState = 'open';

            });
        }else{
            //close slider
            $('header').animate({left:'-17em'},500,function(){
                $('#slide-button .fa').removeClass('fa-arrow-circle-left')
                                      .addClass('fa-arrow-circle-right');
            });

            //update state
            sState = 'close';
        }
    });

    //-------Accordion
    var sPState
    $('#accordion p').hide();

    $('#accordion h2').on('click',function(){
        var sState = $(this).data('state');

        if(sState == 'close'){
            //open p
            $(this).next().slideDown(function(){
                $(this).prev().find('i').removeClass('fa-chevron-circle-down')
                             .addClass('fa-chevron-circle-up');
            });

            //update state
            $(this).data('state','open');

        }else{
            //close p
            $(this).next().slideUp(function(){
                $(this).prev().find('i').removeClass('fa-chevron-circle-up')
                             .addClass('fa-chevron-circle-down');
            });

            //update state
            $(this).data('state','close');

        }
    
        $(this).next().slideDown(function(){
            $(this).prev().find('i').removeClass('fa-chevron-circle-down')
                         .addClass('fa-chevron-circle-up');
        });
        $(this).find('i').removeClass('fa-chevron-circle-down')
                         .addClass('fa-chevron-circle-up');
    });


});