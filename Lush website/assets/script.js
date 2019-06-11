$(function(){

    var anime1 = anime({
        targets: '.section2 .layer',
        translateY: function(layer,i,l){
            return (l-i)*50;

        },
        easing: 'linear',
        duration: 6000,
        autoplay: false,
    });


    $(document).on('scroll',function(){
        var scrollTop = $(document).scrollTop();

        var scrollLength = $(document).height()/2;
        var progress = scrollTop/scrollLength;

        anime1.seek(anime1.duration*progress);

    });
    
});
 





