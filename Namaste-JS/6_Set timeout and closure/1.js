// White a program to print i after ith second

/*
function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
  }
}
x();

/*
// Output was
6
6
6
6
6

Why??
Because of clausers here var is globle scoped so for every iteration there will be a seperate copy of function which is inside x() and every copy is referencing to same variable i in globle scope. As we know js doesn't wait for any one it contineus ierating over loop before 1sec loop has ended and value of i is 6 so every copy of function referance to same i with value 6.
*/

/*------------------------- one solution ---------------*/
/*Insted of var used let so for every function copy in every iteration has it's own copy of i with value at time of iterating. So this will give correct answer.. In other words we can say each and every time the function is called it will reffer to different menory location of i which has it's own separate copy of i*/
/*
function x() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
}
x();
*/

/*----------------------- Without using let keyword -------------------*/
function x() {
  for (let i = 1; i <= 5; i++) {
    // Created closure with seperate copy of i so it will work properly
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
}
x();
