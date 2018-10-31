/**
*   @author Amanda Café <contato@cafeamanda.com.br>
*   @description custom javascript source code file for Axial Implantes's website.
*
**/

$(document).ready(function() {

  // hide smaller navbar-brand on all pages
  // $('#logoSymbol').hide();

  // hide toggleable content @ OBRAS <obras.html>
  $('#maisExec').hide();
  $('#maisEmExec').hide();

  // Initiate tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // Initiate Carousel
  $('.carousel').carousel({
     interval: 4000,
     cycle: true
   });

  // Navbar gets smaller when window.scrollTop() > 0
  // $(window).scroll(function(event){
  //   var scroll = $(this).scrollTop();
  //   if (scroll > 0){
  //     $('#navLogo').hide(300);
  //     $('.navbar').stop().css({
  //       "padding":"0",
  //       "min-height":"80px"
  //     });
  //     $('#logoSymbol').show(200);
  //     $('#navbar').stop().css({
  //       "padding":"15px 0"
  //     });
  //     $('.navbar-brand').css({
  //       "padding":"4px 15px"
  //     })
  //   } else {
  //     $('#navLogo').show(300)
  //     $('.navbar').stop().css('padding-top','10px');
  //     $('#logoSymbol').hide(100);
  //   }
  // });

  // Show #menu @ HOME <index.html> when mouse hovers the 'plus' sign @ the bottom right corner of the page
  $('#menuWrapper').hover(function() {
    $('#menu').css('display','block');
    $('#menuIconWrapper').css('opacity','0.8');
  });

  // Close #menu on mouseleave
  $('.jumbotron, footer').hover(function(event) {
    if ($('#menu').css('display')=='block' && !$(event.target).hasClass('showMenu')) {
      $('#menu').css('display','none');
      $('#menuIconWrapper').css('opacity','0.5');
    }
  });

  // Animate CSS changes in #menu on hover
  $('#menu ul li').unbind('mouseenter mouseleave'); // Unbind 'hover' back to 'mouseenter' and 'mouseleave'
  $('#menu ul li').on('mouseenter', function() {
    $(this).css({
      'background':'#32336b',
      'color':'#eee',
    });
    $(this).stop().animate({
      paddingLeft:25
    },100);
  });
  $('#menu ul li').on('mouseleave', function() {
    $(this).css({
      'background':'#eee',
      'color':'#32336b',
    });
    $(this).stop().animate({
      paddingLeft:20
    },100);
  });

  // Scroll to designated jumbotron on click @ HOME <index.html>
  $('#inicio').click(function() {
    $('html, body').animate({
      scrollTop: $('#j1').offset().top
    }, 500);
  });
  $('#segmentos').click(function() {
    $('html, body').animate({
      scrollTop: $('#j2').offset().top
    }, 500);
  });
  $('#marcas').click(function() {
    $('html, body').animate({
      scrollTop: $('#j3').offset().top
    }, 500);
  });
  $('#eventos').click(function() {
    $('html, body').animate({
      scrollTop: $('#j4').offset().top
    }, 500);
  });
  $('#mapa').click(function() {
    $('html, body').animate({
      scrollTop: $('#j5').offset().top
    }, 500);
  });
  $('#rodape').click(function() {
    $('html, body').animate({
      scrollTop: $('#home footer').offset().top
    }, 500);
  });

  // Change text style when hovering img @ HOME <index.html>
  $('.inside-text-hovers-blue')
  .unbind('mouseenter mouseleave')
  .on('mouseenter', function() {
    $(this).children('h3').stop().animate({
      color:"#0058a3"
    },100);
    $(this).children('.img-change').css({
      "-webkit-filter":"none",
      "filter":"none"
    });
  })
  .on('mouseleave', function() {
    $(this).children('h3').stop().animate({
      color:"#bbb"
    },100);
    $(this).children('.img-change').css({
      "-webkit-filter":"grayscale(100%)",
      "filter":"grayscale(100%)"
    });
  });

  $('#logoCarousel .col-sm-2')
  .unbind('mouseenter mouseleave')
  .on('mouseenter', function() {
    $(this).children('.img-change').css({
      "-webkit-filter":"none",
      "filter":"none"
    }).addClass("zoom-text");
  })
  .on('mouseleave', function() {
    $(this).children('.img-change').css({
      "-webkit-filter":"grayscale(100%)",
      "filter":"grayscale(100%)"
    }).removeClass("zoom-text");
  });

  // Animate CSS changes in 'footer' on hover
  $('footer p').unbind('mouseenter mouseleave'); // Unbind 'hover' back to 'mouseenter' and 'mouseleave'
  $('footer p').on('mouseenter', function() {
      $(this).stop().animate({
        paddingLeft:5
      }, 100);
  });
  $('footer p').on('mouseleave', function() {
    $(this).stop().animate({
      paddingLeft:0
    }, 100);
  });

  $('.map').click(function () {
    $('.map iframe').css("pointer-events", "auto");
  });


});
