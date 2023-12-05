/*
The major difference here is hoisting 
function statement can be hoisted but function expression can't be hoisted because it is treated as variable by javascript variable

As shown below call a() will get execute without any error but call b() will result in error because it is a function expression
*/
// a();
// b();

// Function Statement AKA Function declaration
function a() {
  console.log("a called");
}

// Function expression
/*In js we can assing a function to any variable of we can say in js we can use function as value
So assing a function to variable is called function expression*/
var b = function fun() {
  console.log("b called");
};
var c = function () {
  console.log("c called");
};
// Both b() and c() are function exopressions

b();
c();
// After creating function expression this fun() will not have any memory allocated
// fun();

// Anonymous function
// function () {
//   console.log("From anonymous");
// };

/*----------------------------------------- Diff between parameters and argumwnts ------------------------------------*/
// Here there param1 and param2 lables which will get the valus passed to function are called PARAMETERS
function x(param1, param2) {
  console.log(param1, param2);
}
// And here values passed to any function are called ARGUMENTS
x("Aditya", "Kaneriya");

/*-------------------------------------- First class functions -------------------------------------*/
// DEFF  :: In js any function can be passed as argument to any function, also any function can be returned from any function this ability of functions is called first class functions

// Returned anonymous function from a function
function y() {
  return function () {};
}
console.log(y());

// Returned named function from a function
function j() {
  return function xyz() {};
}
console.log(j());

// Passed a function as argument to a function
function z(param1) {
  console.log(param1);
}
z(function abc() {
  console.log("From abc");
});
