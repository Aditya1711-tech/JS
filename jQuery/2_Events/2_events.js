/*
$(document).ready(function (){
	$(css-selector).action(){
			//Task to perform
  }
}

This $(document).ready(
)
is depricate now we can aulternatively use this direct
$(function(){
    // Task to perform
})
*/

$(function () {
  /*------------ Hover event -----------*/
  /*This hover is consist of two functions first execute when mouse enters and second when mouse leaves*/
  $("p").hover(
    function () {
      //   $(this).css("background-color", "yellow");
      console.log("Mouse in");
    },
    function () {
      //   $(this).css("background-color", "pink");
      console.log("Mouse out");
    }
  );
});

/*There are other events also dbclick, mouseenter, mouseleave, mousedown, mouseup, hover*/

/*----------------- Form events-----------------*/
/*
$(function () {
    $("input").focus(function () {
        console.log("Focused");
    });
    $("input").blur(function () {
        console.log("Blured");
    });
});
*/
/*------------- Above can be written as ----------*/
/* 
$(function () {
    $("input").on("focus", function () {
        console.log("focused");
    });
    $("input").on("blur", function () {
        console.log("Blured");
    });
});
*/

/*------------- Above can be written as ----------*/
/* 
$(function () {
    $("input").on("focus blur", function () {
        console.log("Something happened");
    });
});
*/

/*------------- In above shorthand if we want to perform doffrent operation then ----------*/
$(function () {
  $(".formClass input").on({
    focus: function () {
      console.log("Focused");
    },
    blur: function () {
      console.log("Blured");
    },
    change: function () {
      console.log("Changed");
    },
  });
});
