$(function(){

    var anime1 = anime({
        targets: '.section1 .layer',
        translateY: function(layer,i,l){
            return (l-i)*50;

        },
        easing: 'linear',
        duration: 2000,
        autoplay: false,
    });

    var anime2 = anime({
        targets: '.layer2 h1',
        scale: [2,1],
        opcity: [0,1],
        easing: 'linear',
        duration: 2000,
        autoplay: false,
    });

    $(document).on('scroll',function(){
        var scrollTop = $(document).scrollTop();

        var scrollLength = $(document).height()/2;
        var progress = scrollTop/scrollLength;
        // 🙂 500 is scroll length
        anime1.seek(anime1.duration*progress);

        var progress2 = scrollTop/300;
        anime2.seek(anime2.duration*progress2);
    });
    
});
 





