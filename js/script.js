$(document).ready(function(){
	$(".hamburger").click(function() {
   	$(this).toggleClass("is-active");
   	$(".panel").slideToggle("slow");

   	// $("#mainContent").addClass("d-none");
   	// var x = $("#mainContent");
   	// 	if $("#hamburger-11") === $(".is-active") {
   	// 		x.style.display = "none";
   	// 	}
   	// 	else {
   	// 		x.style.display = "block";
   	// 	}
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