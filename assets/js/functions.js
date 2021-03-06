$(document).ready(function(){

	$(window).scroll(function(){

		var wScroll = $(this).scrollTop();
		var navPos = $('nav').offset().top;
		var headPos = $('#header').offset().bottom;

		console.log('wScroll');


		if(wScroll > $('#textrade').offset().top) {

			$('#skills #skills-chart').each(function(){
				$('#skills #skills-chart').addClass('is-showing');
			});

			$('#skills-chart .value').each(function(){
				$('#skills .value').addClass('animate');
			});
		}

	});

  // Even when the window is resized, run this code.
  $(window).resize(function(){



    // Find the value of 90% of the viewport height
    var ninetypercent = $('#header').height();

    // When the document is scrolled ninety percent, toggle the classes
    // Does not work in iOS 7 or below
    // Hasn't been tested in iOS 8
    $(document).scroll(function(){

      // Store the document scroll function in a variable
      var y = $(this).scrollTop();

      // If the document is scrolled 90%
      if( y > ninetypercent) {

        // Add the "sticky" class
        $('nav').addClass('sticky');
      } else {
        // Else remove it.
        $('nav').removeClass('sticky');
      }
    });

  // Call it on resize.
  }).resize();




  $('.quote1').mouseenter(function(){
    $(this).fadeOut();
    $('.info1').fadeIn();
  });
	$('.quote2').mouseenter(function(){
    $(this).fadeOut();
    $('.info2').fadeIn();
  });
	$('.quote3').mouseenter(function(){
    $(this).fadeOut();
    $('.info3').fadeIn();
  });
});

$(document).ready(function() {
	 $('.work-wrap .background').hover(function(){
		 $(this).next().slideToggle(200);
	 });
 });



var action ='click';
var speed ='500';

$(document).ready(function(){

	$('li.question').on(action,function(){
		// get next element
		$(this).next().slideToggle(speed)

		.siblings('li.answer').slideUp();
	});
});
