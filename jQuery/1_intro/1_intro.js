/*---------------------------------------- Introduction -------------------------------------*/
/*
jQuery is lightweight javaScript library. The purpose of jQuery is to make use of javaScript easy on websites.

It simplifies lot of complicates things in javascript like AJAX calls, DOM-Manipulation.

jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.

// Basic code syntex
$(document).ready(function (){
	$(css-selector).action(){
			//Task to perform
  }
}

// Sample code
$(document).ready(function () {
  // Write your code here
});

Here this is basic first line is important, It means perform operations inside it after whole document is ready, otherwise before whole document is ready if we perform any operation then it may be possible we want some element from DOM but it is not ready yet. So, for be safe perform every operation after whole document is ready.
*/

$(document).ready(function () {
  /*--------- Select element ---------*/
  //   $("button").click(function () {
  //     $("p").hide();
  //   });

  /*--------- Select id ---------*/
  //   $("button").click(function () {
  //     $("#cerial").hide();
  //   });

  /*--------- Select class ---------*/
  $("button").click(function () {
    $(".unicycle").hide();
  });
});
