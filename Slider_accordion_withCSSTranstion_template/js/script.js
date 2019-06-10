$(function(){
    var sState = 'close';

    $('#slide-button').on('click',function(){
        $('header').addClass('open');

        if(sState == 'close'){
            //open slider
            $('header').addClass('open');
            $('header').one('transitionend',function(){
                $('#slide-button i').removeClass('fa-arrow-circle-right')
                                    .addClass('fa-arrow-circle-left');
            });
            sState = 'open';
        }else{
            //close slider
            $('header').removeClass('open');
            $('header').on('transitionend',function(){
                $('#slide-button i').removeClass('fa-arrow-circle-left')
                                    .addClass('fa-arrow-circle-right');
            });
            sState = 'close';
        }

        
    });

    //accordion

    $('#accordion h2').on('click',function(){

        var sState = $(this).data('state');
        if(sState == 'close'){
            //open p
            $(this).next().addClass('open');
            $(this).next().one('transitionend',function(){
                $(this).prev().find('i').removeClass('fa-chevron-circle-down')
                                        .addClass('fa-chevron-circle-up');
            });
            $(this).data('state','open');
        }else{
            //close p
            $(this).next().removeClass('open');
            $(this).next().one('transitionend',function(){
                $(this).prev().find('i').removeClass('fa-chevron-circle-up')
                                        .addClass('fa-chevron-circle-down');
            });
            $(this).data('state','close');
            
        }

        
    });
})
