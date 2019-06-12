$(function(){

    var anime1 = anime({
        targets: '.section2 .layer0',
        translateY: function(layer,i,l){
            return (l-i)*50;
        },
        easing: 'linear',
        duration: 8000,
        autoplay: false,
    });
    var anime2 = anime({
        targets: '.section2 .layer1',
        translateY: function(layer,i,l){
            return (l-i)*50;

        },
        easing: 'linear',
        duration: 3000,
        autoplay: false,
    });
    var anime3 = anime({
        targets: '.section2 .layer2',
        translateY: function(layer,i,l){
            return (l-i)*50;

        },
        easing: 'linear',
        duration: 1000,
        autoplay: false,
    });


    $(document).on('scroll',function(){
        var scrollTop = $(document).scrollTop();

        var scrollLength = $(document).height()/2;
        var progress = scrollTop/scrollLength;

        anime1.seek(anime1.duration*progress);
        anime2.seek(anime2.duration*progress);
        anime3.seek(anime3.duration*progress);


    });
    
});
 





