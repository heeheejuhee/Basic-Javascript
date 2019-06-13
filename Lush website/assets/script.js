$(function(){

    var anime1 = anime({
        targets: '.section2 .layer0',
        translateY: function(layer,i,l){
            return (l-i)*50;
        },
        easing: 'linear',
        duration: 3000,
        autoplay: false,
    });
    var anime2 = anime({
        targets: '.section2 .layer1',
        translateY: function(layer,i,l){
            return (l-i)*50;

        },
        easing: 'linear',
        duration: 7000,
        autoplay: false,
    });
    var anime3 = anime({
        targets: '.section2 .layer2',
        translateY: function(layer,i,l){
            return (l-i)*50;

        },
        easing: 'linear',
        duration: 9000,
        autoplay: false,
    });

    var s2Offset = $('.section2').offset().top;
    var thirdScreen = $(window).height()/3;
    $(document).on('scroll',function(){
        var scrollTop = $(document).scrollTop();

        var scrollLength = $(document).height()/2;
        var progress = scrollTop/scrollLength;

        anime1.seek(anime1.duration*progress);
        anime2.seek(anime2.duration*progress);
        anime3.seek(anime3.duration*progress);

        if(scrollTop >= s2Offset - thirdScreen){
            $('.text-box').removeClass('invisible');
        }else{
            $('.text-box').addClass('invisible');
        }
    });


    

    //------- Popup --------//

    $('.flex-container div').on('click',function(){
        var clone = $(this).find('img').clone();

        $('.popup').empty();
        $('.popup').append(clone);
        $('.popup').fadeIn();


    });
    

    $('.popup').on('click',function(){
 
        $(this).fadeOut();
    });
});
 





