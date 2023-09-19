// Example on callbacks

/*
Here compareAndAdd Accepts two numbers as parameters and two callbacks.
In JS we can pass function as arguments and also can return function from function that's why it is called higher order function.
According to condition any of one callback is get invoked
*/

function compareAndAdd(num1, num2, callBackSuccess, callBackFailure) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    callBackSuccess(num1, num2);
  } else {
    callBackFailure();
  }
}

compareAndAdd(
  3,
  4,
  (num1, num2) => {
    console.log(num1 + num2);
  },
  () => {
    console.log("Something went wrong due to type error");
  }
);
