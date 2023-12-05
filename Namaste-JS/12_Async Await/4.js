const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("World");
  }, 5000);
});

async function hello() {
  console.log("Hello world");
  const data = await p1;
  console.log(data);
  console.log("Hello from function after p1");

  const data2 = await p2;
  console.log(data2);
  console.log("Hello from function after p2");
}
hello();

/*
OUTPUT: Hello world
        // After 10 seconds all the below lines will be printed
        Hello
        Hello from function after p1
        World
        Hello from function after p2
*/

/*
Explenation: In previous we see that in async function JS engine wait for the promise to resolve and then it will execute the next line of code.

So here idealy we should get the output as:
        Hello world
        // After 10 seconds blow two lines will be printed
        Hello 
        Hello from function after p1
        // After total of 15 seconds (Means 5seconds after printing above lines) blow two lines will be         printed 
        World
        Hello from function after p2

But are not getting that output, So we can say it is not waiting for the promise to resolve. it just pretend to wait for the promise to resolve.
*/

/*---------------- Check output by swaping waiting time for both the promises -------------*/
/*
OUTPUT WILL BE: Hello world
                // After 5 seconds all the below lines will be printed
                World
                Hello from function after p1
                // After total of 10 seconds (Means 5seconds after printing above lines) blow two lines will be printed 
                Hello
                Hello from function after p2
*/

// Let's see how it will work behind the scene in next file.
