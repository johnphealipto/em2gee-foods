$(document).ready(function() {

   // MENU BUTTON FUNCTION
	$(".hamburger").click(function() {
   	$(this).toggleClass("is-active");
   	$(".panel").slideToggle("slow");
      $("#mainContent").toggleClass("d-none");
   });


   // CONTACT US
   $(".contact-address-location").hover(function() {
      // $(".fa-map-marker-alt").toggleClass('fa-4x');
   });
   $(".contact-address-tele").hover(function() {
      // $(".fa-address-book").toggleClass("d-none");
   });


   // OUR TEAM
   $(".main-team-members .card.ceo").hover(function() {
      $(".ceo .team-member-img").toggleClass('img-border');
      $(".ceo hr").toggleClass('hr-border');
      $(".ceo p").toggleClass('text-red');
   });
   $(".main-team-members .card.cfo").hover(function() {
      $(".cfo .team-member-img").toggleClass('img-border');
      $(".cfo hr").toggleClass('hr-border');
      $(".cfo p").toggleClass('text-red');
   });
   $(".main-team-members .card.coo").hover(function() {
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


// function myFunction() {
//   var x = document.getElementById("mainContent");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }