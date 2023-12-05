/*---------------- Error handling ----------------*/

const API = "https://api.github.com/users/adiya1711-tech";

/*in this we can't have .catch() after promise so use try-catch block here*/
async function fetchSomething() {
  try {
    await fetch(API)
      .then((res) => res.json())
      .then((res) => console.log(res));
  } catch (error) {
    // If there occur any error in fetching some data then it will come out from try block and executes catch block.
    console.log("Something went wrong!!!");
    console.log(error);
  }
}

fetchSomething();

/*
Or as we know that this async function return promise so we can use .cath() with function call i.e.
fetchSomething().catch();

This will work same as try-catch.
*/
