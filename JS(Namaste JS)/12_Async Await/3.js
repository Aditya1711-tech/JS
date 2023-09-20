/*----------------- Deep dive into promise handeling from async functions ---------------*/

// Let's mimic the behaviour of promise. because not always promise will resolves immediately.
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 10000);
});

/*-------------- Handeling it without async function --------------*/
function hello() {
  p.then((data) => console.log(data));
  console.log("Hello from function");
}
hello();
/*
Output: Hello from function
        Hello // after 10 seconds
*/

/*-------------- Handeling it with async function --------------*/
async function hello() {
  const data = await p;
  console.log(data);
  console.log("Hello from function");
}
hello();
/*
Output: Hello // after 10 seconds
        Hello from function
*/

/*
So here we have notised that the async function will wait for the promise to resolve and then it will execute the next line of code.
So we can say we can make JavaScript to wait for the promise to resolve by using async function.
As we know time,tide and JavaScript waits for none. So we can make JavaScript to wait for the promise to resolve by using async function.

Dose that actually waits for the promise to resolve?..... Let see in next file.
*/
