$(function(){

	var tl = anime.timeline({
		easing: 'linear',
		autoplay: true
	})
	.add({
		targets: '.section1 .layer',
		translateY: function(el,i,l){
			return [i*10,0];
		},
		// translateZ: function(el,i,l){
		// 	return [(i-l)*50,0];
		// },
	})
	.add({
		targets: '.section1 .viewpoint',
		translateY: [0,'100vh'],
		duration: 1000
	},0)

	var screenHeight = $(window).height();
	$(document).on('scroll',function(){
	  	var scrollTop = $(document).scrollTop();

	  	var progress = (scrollTop)/screenHeight;

	  	tl.seek(tl.duration * progress);
	});

});
 





