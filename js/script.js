$(document).ready(function() {

	$(".hamburger").click(function() {
   	$(this).toggleClass("is-active");
   	$(".panel").slideToggle("slow");
      $("#mainContent").toggleClass("d-none");
   });


   $(".contact-address-location").hover(function() {
      // $(".fa-map-marker-alt").toggleClass('fa-4x');
   });
   $(".contact-address-tele").hover(() => {
      // $(".fa-address-book").toggleClass("d-none");
   });


   $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 0){
         $("header").addClass('scrolled');
      } 
      else{
         $("header").removeClass('scrolled');
      }
   });
   

});


// function myFunction() {
//   var x = document.getElementById("mainContent");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }


// $(document).ready(function(){
//   $("#flip").click(function(){
//     $("#panel").slideToggle("slow");
//   });
// });