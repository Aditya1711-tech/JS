/*
Async function always return a promise

i.e.
async function hello() {
    return new Promise((resolve, reject) => {
        resolve('Hello');
    });
}

or if we don't return anything from async function then it will return a promise with undefined value

Or if we just return some value from async function then it will wrap that value in a promise and return it.
i.e.
async function hello() {
    return 'Hello';
}
So this Hello will be wrapped in a promise and returned.
*/

/*------------- Exapmple of returning value from async function ------------*/
/*
async function hello() {
    return "Hello";
}
const dataPromise = hello();
console.log(dataPromise); // OUTPUT: Promise {<fulfilled>: "Hello"}

// Extra: If we want to get the value from promise then we can use .then() method
dataPromise.then((data) => console.log(data)); // OUTPUT: Hello
*/

/*------------- Exapmple of returning promise from async function ------------*/
const p = new Promise((resolve, reject) => {
  resolve("Hello");
});

async function hello() {
  return p;
}
const dataPromise = hello();
dataPromise.then((data) => console.log(data)); // OUTPUT: Hello
