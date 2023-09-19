const heading1 = document.querySelector(".Heading1");
const heading2 = document.querySelector(".Heading2");
const heading3 = document.querySelector(".Heading3");
const heading4 = document.querySelector(".Heading4");
const heading5 = document.querySelector(".Heading5");
const heading6 = document.querySelector(".Heading6");
const heading7 = document.querySelector(".Heading7");
const heading8 = document.querySelector(".Heading8");

function changeText(
  element,
  text,
  color,
  time,
  onSuccessCallBack,
  onFailureCallBack
) {
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      element.style.color = color;
      if (onSuccessCallBack) {
        onSuccessCallBack();
      }
    } else {
      if (onFailureCallBack) {
        onFailureCallBack();
      }
    }
  }, time);
}


// This is look like pyramid
// So it is called pyramid of doom
// And also callback hell because it is difficult to understand 
// So solving this problem introduce you to promisies
changeText(heading1,"one","red",1000,()=>{
    changeText(heading2,"two","purple",2000,()=>{
        changeText(heading3,"three","green",3000,()=>{
            changeText(heading4,"four","pink",1000,()=>{
                changeText(heading5,"five","blue",1000,()=>{
                    changeText(heading6,"six","dark blue",2000,()=>{
                        changeText(heading7,"seven","yellow",1000,()=>{
                            changeText(heading8,"eight","orange",3000,()=>{
                                console.log("End of Program......")
                            },()=>{console.log("Element Not found!!!")})
                        },()=>{console.log("Element Not found!!!")})
                    },()=>{console.log("Element Not found!!!")})
                },()=>{console.log("Element Not found!!!")})
            },()=>{console.log("Element Not found!!!")})
        },()=>{console.log("Element Not found!!!")})
    },()=>{console.log("Element Not found!!!")})
},()=>{console.log("Element Not Found!!!")})