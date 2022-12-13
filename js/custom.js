$(document).on("scroll", function () {
  if ($(document).scrollTop() > 40) {
    $(".header_outer").addClass("shrink");
  } else {
    $(".header_outer").removeClass("shrink");
  };
});

$(".menuTrigger").click(function () {
  $("body").toggleClass("menu_active");
});

$(".overly").click(function () {
  $("body").removeClass("menu_active");
});

// var one = "#ffffff",
//  two = "#000000",
//  three = "#ffffff",
//  four = "#000000";

$(window).on("scroll touchmove", function () {
  if ($(document).scrollTop() >= $("#one").position().top) {
    $('.socialbar ul li a').css('color', $("#one").attr("data-color"));
    $('.socialbar').css('border-color', $("#one").attr("data-color"));
    $('.mobile-socialbar ul').css('background-color', '#fff');
    $('.mobile-socialbar ul li a').css('color', '#000');
  };
  //  if ($(document).scrollTop() > $("#two").position().top) {
  //  $('.socialbar ul li a').css('color', $("#two").attr("data-color"))
  //  };
  if ($(document).scrollTop() > $("#two").position().top) {
    $('.socialbar ul li a').css('color', $("#two").attr("data-color"));
    $('.socialbar').css('border-color', $("#two").attr("data-color"));
    $('.mobile-socialbar ul').css('background-color', '#000');
    $('.mobile-socialbar ul li a').css('color', '#fff');
  };
  if ($(document).scrollTop() > $("#three").position().top) {
    $('.socialbar ul li a').css('color', $("#three").attr("data-color"));
    $('.socialbar').css('border-color', $("#three").attr("data-color"));
    $('.mobile-socialbar ul').css('background-color', '#fff');
    $('.mobile-socialbar ul li a').css('color', '#000');
  };
  if ($(document).scrollTop() > $("#four").position().top) {
    $('.socialbar ul li a').css('color', $("#four").attr("data-color"));
    $('.socialbar').css('border-color', $("#four").attr("data-color"));
    $('.mobile-socialbar ul').css('background-color', '#000');
    $('.mobile-socialbar ul li a').css('color', '#fff');
  };
  // social animation edn

  //  if ($(document).scrollTop() > $(".sec-two-info").position().top) {
  //   $(".sec-two-info").addClass("line_animation");
  // } else {
  //   $(".sec-two-info").removeClass("line_animation");
  // };


  if ($(document).scrollTop() > 0.4 * $(window).height()) {
    $(".sec-three").addClass('fadeout');
  } else {
    $(".sec-three").removeClass('fadeout');
  }

  $('#leave-reason-input').keyup(function () {
    var height = $(this).scrollTop();
    var initHeight = 5;
    if (initHeight < height) {
      // $(this).css({'height':'8rem'});
      $(".sec-three-info").addClass('fadeout');
    }
  })

});


// $(window).scroll(function() {    
//   var scroll = $(window).scrollTop();    
//   if (scroll >= 0.4 * $(window).height()) {
//       $(".cta_box").addClass('fadeout');
//   } else {
//       $(".cta_box").removeClass('fadeout');
//   }
// });

// $(function(){
//   $(window).scroll(function(){

//     var aTop = $(' #line_animation .main-sec-wrap-list li:first-child::before').animation();
//     if($(this).scrollTop()> $("aTop").position().top{
//         //alert('header just passed.');
//         // instead of alert you can use to show your ad
//         // something like $('#footAd').slideup();

//     }





//   });
// });






// 18-05-22 //

$(document).ready(function () {
  $(".submit_btn").click(function () {
    $(".outer-shadow").addClass("submitdrop");
    $(".drop").addClass("submitdrop");
    $(".wave_wrap").addClass("appear_img");
  })
})





$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $('.header_nav').addClass("custom_sticky_header");
    }
    else {
      $('.header_nav').removeClass("custom_sticky_header");
    }
  });
})

// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("custom_sticky_header")
//   } else {
//     navbar.classList.remove("custom_sticky_header");
//   }
// }







