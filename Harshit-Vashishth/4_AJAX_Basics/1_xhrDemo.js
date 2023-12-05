const xhr = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/posts";

// For info aabout values of xhr.readyState check this out
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
console.log(xhr.readyState);
xhr.open("GET", url);
console.log(xhr.readyState);

// Any point of time print xhr and see what is stored in it what are the kyes and all info
console.log(xhr);

xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  // At state 4 of xhr.readyState we get response or error
  if (xhr.readyState === 4) {
    // this result is in form of string
    console.log(xhr);
    const result = xhr.response;
    console.log(typeof result);
    // console.log(result);
    const data = JSON.parse(result);
    console.log(typeof data);
    console.log(data);
  }
};

/*
// Alternatively we can write these two lines insted of above whole function

xhr.onload = function(){
  console.log(xhr.readyState)
}

// This onload only works when xhr.readyStae is 4
*/

xhr.send();
