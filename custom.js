$(document).ready(function(){


  function myNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(".slider-first ").owlCarousel({
  autoPlay: 3000,
      items : 2, // THIS IS IMPORTANT
      responsive : {
        414 : { 
          items : 2,
          dotsEach: 5,
          dots: 5  
            }, // from zero to 480 screen width 4 items
            768 : { 
              items : 3  
            }, // from 480 screen widthto 768 6 items
            1024 : { 
              items : 4,   // from 768 screen width to 1024 8 items
            }
          },
        });
$(".owl-second").owlCarousel({
  autoPlay: 3000,
      items : 2, // THIS IS IMPORTANT
      responsive : {
        414 : { 
          items : 2,
          dotsEach: 4,
          dots: 4  
            }, // from zero to 480 screen width 4 items
            768 : { 
              items : 3  
            }, // from 480 screen widthto 768 6 items
            1024 : { 
              items : 4,   // from 768 screen width to 1024 8 items
            }
          },
        });

});
$(document).ready(function () {
  $('#isnfo').click(function() {
  $('html, body').animate({
    scrollTop: $("div.content").offset().top
  }, 1000)
}), 
  $('#character').click(function (){
    $('html, body').animate({
      scrollTop: $("div.character").offset().top
    }, 1000)
  }),
   $('#thecrews').click(function (){
    $('html, body').animate({
      scrollTop: $("div.crew").offset().top
    }, 1000)
  }),
      $('#novel').click(function (){
    $('html, body').animate({
      scrollTop: $("div.see-ourworl").offset().top
    }, 1000)
  }),
       $('#bazra').click(function (){
    $('html, body').animate({
      scrollTop: $("div.img-baraza").offset().top
    }, 1000)
  }),
  $('#scrollToBottom').click(function (){
    $('html, body').animate({
      scrollTop: $("div.content").offset().top
    }, 1000)
  })
});
$(window).scroll(function() {
    if($(this).scrollTop()>5) {
        $( ".navbar-me" ).addClass("fixed-me");
        $( ".list-a" ).addClass("col-txta");

    } else {
        $( ".navbar-me" ).removeClass("fixed-me");
         $( ".list-a" ).removeClass("col-txta");
    }
});