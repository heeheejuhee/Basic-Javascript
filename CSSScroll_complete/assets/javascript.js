$(function(){
	//sticky menu----------------
	var menuOffset = $('.pure-menu-horizontal').offset().top;

	$(document).on('scroll',function(){

		var scrollTop = $(document).scrollTop();
		if(scrollTop >= menuOffset){
			//fix the menu
			$('.pure-menu-horizontal').addClass('fixed');
		}else{
			//unfix the menu
			$('.pure-menu-horizontal').removeClass('fixed');
		}

	});

	//High-lighting the menu items ---  ¯\_(ツ)_/¯
	var offset1 = $('.section1').offset().top;
	var offset2 = $('.section2').offset().top;
	var offset3 = $('.section3').offset().top;
	var offset4 = $('.section4').offset().top;
	$(document).on('scroll',function(){
		var scrollTop = $(document).scrollTop();

		var activeLi;
		if(scrollTop >= offset1 && scrollTop<offset2){
			activeLi = $('ul>li:nth-child(1)');
		}
		if(scrollTop >= offset2 && scrollTop<offset3){
			activeLi = $('ul>li:nth-child(2)');
		}
		if(scrollTop >= offset3 && scrollTop<offset4){
			activeLi = $('ul>li:nth-child(3)');
		}
		if(scrollTop >= offset4){
			activeLi = $('ul>li:nth-child(4)');
		}
		activeLi.addClass('active');
		$('ul>li').not(activeLi).removeClass('active');

	});


	//smooth scrolling
	$('[data-to]').on('click',function(e){

		//e: represents the event just took place
		//e is optional bucket
		//e.preventDefault() is to stop the jumping to a new place
		e.preventDefault();

		var sSection = $(this).data('to');
		var sectionOffset = $(sSection).offset().top + 1;
		//+1 to make sure we are well within the section

		//move to a section by scrolling
		$('html,body').animate({scrollTop:sectionOffset},1000);
	});

	//Bonus topic: thank you guys for doing this
	// $('h1.animated').each(function(){})
	$(document).on('scroll',function(){

		var scrollTop = $(document).scrollTop();

		$('h1.animated').each(function(i,heading){
			//the offset of each heading1
			var headingOffset = $(heading).offset().top;

			if(scrollTop > headingOffset - 300){
				//add class grow to the heading wrap
				$(heading).parent().addClass('grow');

				if($(heading).hasClass('invisible') == true){
					$(heading).removeClass('invisible')
							  .addClass('slideInLeft');

					$(heading).one('animationend',function(){
						$(this).removeClass('slideInLeft');
					});
				}
			}else{
				$(heading).parent().removeClass('grow');

				if($(heading).hasClass('invisible') == false){

					$(heading).addClass('bounceOutRight');

					$(heading).one('animationend',function(){
						$(this).removeClass('bounceOutRight')
						       .addClass('invisible');
					});

					$(this).addClass('invisible');
				}
			}

		});

		// for those who like this sort of things
		var aHeadings = $('h1.animated');
		for (var i = 0; i < aHeadings.length; i++) {
			var heading = aHeadings[i];

			var headingOffset = $(heading).offset().top;
			if(scrollTop > headingOffset -300){
				//add class grow to the heading wrap
				$(heading).parent().addClass('grow');
			}else{
				$(heading).parent().removeClass('grow');
			}
		}
	});
});





















