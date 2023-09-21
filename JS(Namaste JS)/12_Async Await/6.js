/*-------------- Example with fetch --------------*/

const API = "https://api.github.com/users/aditya1711-tech";

async function fetchSomething() {
  /*
    See littlebit aboute how fetch() works in JS:

    fetch() will return output wraped in promise so we can use .then() after it and convert it into json using .json() it will again return result wraped into a promise so use .then() and extract output.
    */
  const apiOutpu = await fetch(API);
  const res = await apiOutpu.json();
  /*
  As explained above we can extract result as
  fetch(API)
    .then((res) => res.json())
    .then((res) => console.log(res));
  */
  console.log(res);
}

fetchSomething();

// Let's see error handepling in async await in next file
