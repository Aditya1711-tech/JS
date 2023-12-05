/*----------- How async-await works under the hood -------------*/

// 2.Execution context of function will be pushed to call stack
async function hello() {
  // 3.Executes thi line
  console.log("Hello world");
  // 4.See here await then suspend execution context of function from call-stack untill p1 not get resolved.In mean time if anything come into call-stack it will immediatly get executed.
  // 5.When it get resolved then again ececution context will be pushed to call stack. Anmd also it will start execution from line where it got suspended.
  const data = await p1;
  //6. Execution willl go further synchronasly.
  console.log(data);
  console.log("Hello from function after p1");
  // 7.Check that p2 is resolved or not if not then untill it get resolved it context will remain suspended from call-stack. Otherwise execution will contineu synchronously.
  const data2 = await p2;
  console.log(data2);
  console.log("Hello from function after p2");
}
// 1.When this function call made.
hello();

/*
As we know JS is single threaded, non-blocking langauge that's why to continue exetion of other code it will suspend execution-context of function untill promise not get resolved.
*/

// Let's see real-world example in next file.
