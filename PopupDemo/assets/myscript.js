$(function(){

	// console.log('Bla');

	$('.nav').hide();

	$('.bars').on('click',function(){

		$('.nav').slideToggle();

	});

	//popup1
	$('.handle1').on('click',function(){
		$('.popup1').fadeIn();
	});

	$('.popup1').on('click',function(){
		$('.popup1').fadeOut();
	});

});


