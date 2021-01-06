AOS.init();

$(document).ready(function() {

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
      $(".brief-info-btn button i").toggleClass('show-arrow');
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
   });
   $(".main-team-members .cfo").hover(function() {
      $(".cfo .team-member-img").toggleClass('img-border');
      $(".cfo hr").toggleClass('hr-border');
      $(".cfo p").toggleClass('text-red');
   });
   $(".main-team-members .coo").hover(function() {
      $(".coo .team-member-img").toggleClass('img-border');
      $(".coo hr").toggleClass('hr-border');
      $(".coo p").toggleClass('text-red');
   });


   // $(window).scroll(function(){
   //    var scroll = $(window).scrollTop();
   //    if (scroll > 0){
   //       $("header").addClass('scrolled');
   //    } 
   //    else{
   //       $("header").removeClass('scrolled');
   //    }
   // });
   
});