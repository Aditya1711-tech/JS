// DEF :: In JS we can pass function as arguments to other function and from that function passed function can be called it is called function callback exapmle is as shown below

/*
As we know already JS is synchronus, single threaded langauge 
So, callbacks allows to run it asynchronously 
*/

function calling(parm1) {
  parm1();
}
function passed() {
  console.log("Passed called");
}
calling(passed);

/*---------------------------------------- Some examples on setTimeout() --------------------------------------*/

console.log("Start");

setTimeout(() => {
  console.log("From 5000");
}, 5000);

setTimeout(() => {
  console.log("From 2000");
}, 2000);

console.log("End");
