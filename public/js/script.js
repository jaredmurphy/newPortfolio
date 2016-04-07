$(document).ready(function() {
  

  // jquery smooth scrolling
  smoothScroll.init();

  // intro animations
  setTimeout(function() {
  	$('.nameTag h1').css("display", "block").addClass("slideInLeft");
  	setTimeout(function() {
  		$('.nameTag h3').css("display", "block").addClass("slideInLeft");
  	}, 1000)
  	setTimeout(function() {
  		$('.vertical_line').fadeIn('slow');
  	}, 2500);
  }, 2000);



  // css changes on scroll height
  $(document).scroll(function() {
  	var topOfContact = $("#contact").offset().top;
        var contactLi = $('.contactLi').offset().top;
  	var topOfWorks = $("#portfolio").offset().top;

  	$(window).scroll(function() {
  	  if (topOfContact < contactLi) {
  	    $('.home_menu a').css("color", "rgba(2, 70, 109, 1)");
            $('.home_menu li').css("color", "rgba(2, 70, 109, 1)");

            $('.home_menu a').hover(function() {
              $(this).css('color', 'rgba(2, 70, 109, 1)');
              $(this).css('font-weight', '1000');
             }, function() {
              $('.home_menu a').css('color', 'rgba(2, 70, 109, 0.75)');
              $('.home_menu a').css('font-weight', 'normal');
             }); // ends hover function

  	  } else if (topOfContact > contactLi) {
            $('.home_menu a').css('color', 'rgba(247, 247, 255, 0.5)');
            $('.home_menu li').css('color', 'rgba(247, 247, 255, 0.5)');

            $('.home_menu a').hover(function() {
              $(this).css('color', 'rgba(247, 247, 255, 1)');
            }, function() {
              $('.home_menu a').css('color', 'rgba(247, 247, 255, 0.5)')
            }); // ends hover function
          } // ends nav scroll functionality

           if (topOfWorks < contactLi) {
  		//$('.portfolio_pieces').show().addClass("rollIn");
  		$('.portfolio_pieces').css("visibility", "visible").addClass("rollIn");
           }

         
          
        }); // ends window scroll function
  }); // ends document scroll function


  // skills animation
  var animationOut;
  var animationIn;
  $('.skill-front, .skill-back').click(function() {
    $('.skill-front, .skill-back').addClass('shake').fadeOut();
    setTimeout(function() {
      $('.skill-front, .skill-back').removeClass('shake').fadeIn();
    }, 1000);
  }); // ends click function
  

  // portfolio image hover
  var piece;
  $('.img_hover').hover(function() {
  	if ($(this).hasClass('watch')){
  		piece = 'watch';
  	} else if ($(this).hasClass('climate')) {
  		piece = 'climate';
  	} else if ($(this).hasClass('invest')) {
  		piece = 'invest';
  	} else if ($(this).hasClass('chit-chat')) {
  		piece = 'chit-chat';
  	}
        $('.' + piece + 'Pic').addClass('hidden');
  	$('.' + piece + 'Text').addClass('show');
    }, function() {
        $('.portfolio_pic').removeClass('hidden');
        $('.portfolio_text').removeClass('show');
    });// ends hover function

}); // ends document ready function //
