$(function(){
    var stickyMenu = $('.pure-menu-horizontal').offset().top;

    $(document).on('scroll',function(){
        var scrollTop = $(document).scrollTop();
        if(scrollTop >= stickyMenu){
            $('.pure-menu-horizontal').addClass('fixed');
        }else{
            $('.pure-menu-horizontal').removeClass('fixed');
        }
    });

    //high-lighting the menu items
    var offset1 = $('.section1').offset().top;
    var offset2 = $('.section2').offset().top;
    var offset3 = $('.section3').offset().top;
    var offset4 = $('.section4').offset().top;

    $(document).on('scroll',function(){
        var scrollTop = $(document).scrollTop();

        var activeLi;
        if(scrollTop >= offset1 && scrollTop < offset2){
            activeLi = $('ul>li:nth-child(1)');
        }
        if(scrollTop >= offset2 && scrollTop < offset3){
            activeLi = $('ul>li:nth-child(2)');
        }
        if(scrollTop >= offset3 && scrollTop < offset4){
            activeLi = $('ul>li:nth-child(3)');
        }
        if(scrollTop >= offset4){
            activeLi = $('ul>li:nth-child(4)');
        }
        activeLi.addClass('active');
        $('ul>li').not(activeLi).removeClass('active');
    });

    $('[data-to]').on('click',function(e){

		e.preventDefault();

		var sSection = $(this).data('to');
		var sectionOffset = $(sSection).offset().top;
		//+1 to make sure we are well within the section

		//move to a section by scrolling
		$('html,body').animate({scrollTop:sectionOffset},500);
	});


});