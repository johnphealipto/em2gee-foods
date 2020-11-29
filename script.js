$(document).ready(function(){
	$(".hamburger").click(function(){
   	$(this).toggleClass("is-active");
   	$(".panel").slideToggle("slow");
   	// $("#mainContent").addClass("d-none");
  });
});




// $(document).ready(function(){
//   $("#flip").click(function(){
//     $("#panel").slideToggle("slow");
//   });
// });