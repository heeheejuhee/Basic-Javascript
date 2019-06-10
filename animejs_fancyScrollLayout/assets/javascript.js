$(function(){

  //1:plan and animate your scenes in autoplay - usually in timeline
  
  var tl = anime.timeline({
  	easing: 'linear',
  	autoplay: false
  })

  .add({
  	targets: '.section2 .layer2',
  	translateX: ['100vw',0],
  },1000)
  .add({
  	targets: '.section2 .layer3',
  	translateX: ['-100vw',0]
  },3000)
  .add({
  	targets: '.section2 .layer4',
  	translateY: ['-100vw',0]
  },5000)
  .add({
  	targets: '.section2 .layer5',
  	translateY: ['100vw',0]
  },7000)
  .add({
  	targets: '.section2 .layer6',
	translateX: ['100vw',0],
  	translateY: ['100vw',0]
  },9000)

  //Step 3
  .add({
  	targets: '.section2 .viewport',
  	translateY: [0,'500vh'],
  	duration: 10000
  },0)

  console.log(tl.duration);

  //2: Determin the scroll length to unfold animation
    // by extending section height
  
  //3: Add translateY to move view port along with your scrolling

  //4: Map timeline to scroll length

  var screenHeight = $(window).height();
  var s2 = $('.section2').offset().top;

  $(document).on('scroll',function(){
  	var scrollTop = $(document).scrollTop();

  	var progress = (scrollTop - s2)/(screenHeight*5);

  	tl.seek(tl.duration * progress);

  });


});
























