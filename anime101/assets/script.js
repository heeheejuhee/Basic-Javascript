$(function(){

    // var anime1 = anime({
    //     targets: '.section2 label',
    //     translateX: {
    //         value: ['-50vw',0],
    //         delay: anime.stagger(300),
    //         duration: 3000,
    //     },
    //     rotate: {
    //         delay: anime.stagger(200),
    //         // delay: function(el,i){return i*300},
    //     },
    //     easing: 'easeInOutQuart'
    // });

    // var anime2 = anime({
    //     targets: '.section2 input',
    //     translateX: ['50vw',0],
    //     opacity:[0,1],
    //     backgroundColor: ['#eidje','#def122'],
    //     delay: anime.stagger(300),
    //     duration: 3000,
    //     easing: 'easeInOutQuart',
    //     autoplay: false,
    // });

    // var anime3 = anime({
    //     targets: '.section2 .btn-primary',
    //     scale:[2,1],
    //     opacity:[0,1],
    //     duration: 3000,
    //     easing: 'easeInOutQuart'
    // });

    var timeLine = anime.timeline({
        duration: 3000,
        easing: 'easeInOutQuart',
        // autoplay: false,
    });

    timeLine.add({
        targets: '.section2 label',
        translateX: ['-50vw',0],
        delay: anime.stagger(300),
    });

    timeLine.add({
        targets: '.section2 input',
        translateX: ['50vw',0],
        opacity: [0,1],
        delay: anime.stagger(300),
    },0);

    timeLine.add({
        targets: '.section2 .btn-primary',
        opacity: [0,1],
        scale: [2,1]
    });

    // timeLine.seek(timeLine,duration * 0.9);

    var s2 = $('.section2').offset().top;

    $(document).on('scroll',function(){
        var scrollTop = $(document).scrollTop();

        // scrollTop: 0 -- progress 0%
        // scrollTop: 250 -- progress 50%
        // scrollTop: 500 -- progress 100%

        // s2: reference point
        // 500: scroll duration that animation takes place
        // 300: earlier or later

        var progress = (scrollTop-s2+300)/500;

        timeLine.seek(timeLine.duration * progress);
        
    });
});


