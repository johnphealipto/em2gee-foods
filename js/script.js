AOS.init({
   offset: 100,
   duration: 600,
   easing: 'ease-out-quad',
   delay: 0,
   once: true
});

$(document).ready(function() {

   // FIXED HEADER
   $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll >= 100){
         $("header").addClass('fixed');
      } 
      else{
         $("header").removeClass('fixed');
      }
   });


   // MENU BUTTON FUNCTION
	$(".hamburger").click(function() {
   	$(this).toggleClass("is-active");
   	$(".panel").slideToggle("slow");
      $("#mainContent").toggleClass("d-none");
   });


   // WELCOME EM2GEE BOX
   $(".welcome-em2gee-box-2").hover(function() {
      $(this).toggleClass("bg-red");
      $(".welcome-em2gee-box-2 .welcome-em2gee-box-icon i").toggleClass("color-icon");
      $(".welcome-em2gee-box-2 .welcome-em2gee-box-details h3").toggleClass("color-border");
   });
   $(".welcome-em2gee-box-3").hover(function() {
      $(this).toggleClass("bg-red");
      $(".welcome-em2gee-box-3 .welcome-em2gee-box-icon i").toggleClass("color-icon");
      $(".welcome-em2gee-box-3 .welcome-em2gee-box-details h3").toggleClass("color-border");
   });


   // BRIEF INFO BUTTON ICON
   $(".brief-info-btn button").hover(function() {
      $(".brief-info-btn button i").toggleClass('adjust-arrow');
   });


   // SPECIALS
   $(".em2gee-specials-content .sp-1").hover(function() {
      $(".em2gee-specials-content .sp-1 .em2gee-specials-img").toggleClass("border-curve");
      $(".em2gee-specials-content .sp-1 .em2gee-specials-details p").toggleClass("color-red");      
   });
   $(".em2gee-specials-content .sp-2").hover(function() {
      $(".em2gee-specials-content .sp-2 .em2gee-specials-img").toggleClass("border-curve");
      $(".em2gee-specials-content .sp-2 .em2gee-specials-details p").toggleClass("color-red");      
   });
   $(".em2gee-specials-content .sp-3").hover(function() {
      $(".em2gee-specials-content .sp-3 .em2gee-specials-img").toggleClass("border-curve");
      $(".em2gee-specials-content .sp-3 .em2gee-specials-details p").toggleClass("color-red");      
   });
   $(".em2gee-specials-content .sp-4").hover(function() {
      $(".em2gee-specials-content .sp-4 .em2gee-specials-img").toggleClass("border-curve");
      $(".em2gee-specials-content .sp-4 .em2gee-specials-details p").toggleClass("color-red");      
   });
   $(".em2gee-specials-content .sp-5").hover(function() {
      $(".em2gee-specials-content .sp-5 .em2gee-specials-img").toggleClass("border-curve");
      $(".em2gee-specials-content .sp-5 .em2gee-specials-details p").toggleClass("color-red");      
   });


   // CONTACT US
   $(".contact-address-location").hover(function() {
      // $(".fa-map-marker-alt").toggleClass('fa-4x');
   });
   $(".contact-address-tele").hover(function() {
      // $(".fa-address-book").toggleClass("d-none");
   });


   // OUR TEAM
   $(".main-team-members .ceo").hover(function() {
      $(".ceo .team-member-img").toggleClass('img-border');
      $(".ceo hr").toggleClass('hr-border');
      $(".ceo p").toggleClass('text-red');
      $(".ceo").toggleClass('box-shadow-deep');
   });
   $(".main-team-members .cfo").hover(function() {
      $(".cfo .team-member-img").toggleClass('img-border');
      $(".cfo hr").toggleClass('hr-border');
      $(".cfo p").toggleClass('text-red');
      $(".cfo").toggleClass('box-shadow-deep');
   });
   $(".main-team-members .coo").hover(function() {
      $(".coo .team-member-img").toggleClass('img-border');
      $(".coo hr").toggleClass('hr-border');
      $(".coo p").toggleClass('text-red');
      $(".coo").toggleClass('box-shadow-deep');
   });
   
});