(function($){
  $(function(){

    $('.button-collapse').sideNav({
    	menuWidth: 300
    });
    $('.parallax').parallax();
	$('.scrollspy').scrollSpy();
	
	var animatedHeader = (function() { 
		var docElem = document.documentElement,
		navSelector = $( '.nav-add-animate' ), 
		isScroll = false,
		offSet = 100;

		$(window).on('scroll touchmove', function() {
			if( !isScroll ) {
				isScroll = true;
				setTimeout( scrollPage, 250);
				console.log( $( ".nav-extend" ).css( "height" ) );
			}
		});
		
		function scrollPage() {
			var scrollLoc = window.pageYOffset || docElem.scrollTop;
			// navSelector.toggleClass( 'nav-extend', scrollLoc <= offSet);
			if ( scrollLoc >= offSet ) {
				navSelector.removeClass( 'nav-extend' );
			}
			else {
				navSelector.addClass( 'nav-extend' );
			}
			isScroll = false;
		}

		function mediaQryCheck() {
			var navbarHeight = $(".nav-extend").css("height")
			console.log(navbarHeight)
			if (navbarHeight == "64px") {
				console.log("true")
			}
			else {
				console.log("false")
			}
		}
	})();


  }); // end of document ready
})(jQuery); // end of jQuery name space

