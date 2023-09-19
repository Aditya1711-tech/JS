const heading1 = document.querySelector(".Heading1");
const heading2 = document.querySelector(".Heading2");
const heading3 = document.querySelector(".Heading3");
const heading4 = document.querySelector(".Heading4");
const heading5 = document.querySelector(".Heading5");
const heading6 = document.querySelector(".Heading6");
const heading7 = document.querySelector(".Heading7");
const heading8 = document.querySelector(".Heading8");

function changeText(element, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        resolve();
      } else {
        reject();
      }
    }, time);
  });
}

// Here in every then don't forget to write return otherwise it will by default return undefined and promise got rejected and directly do to catch statement so any next promes will not be invoked
changeText(heading1, "one", "red", 1000)
  .then(() => {
    return changeText(heading2, "two", "red", 1000);
  })
  .then(() => {
    return changeText(heading3, "three", "red", 1000);
  })
  .then(() => {
    return changeText(heading4, "four", "red", 1000);
  })
  .then(() => {
    return changeText(heading5, "five", "red", 1000);
  })
  .then(() => {
    return changeText(heading6, "six", "red", 1000);
  })
  .then(() => {
    return changeText(heading7, "seven", "red", 1000);
  })
  .then(() => {
    return changeText(heading8, "eight", "red", 1000);
  })
  .catch((error) => {
    alert(error);
  });

// So we can clearly see above code is more readalbe than previous code with callbacks
