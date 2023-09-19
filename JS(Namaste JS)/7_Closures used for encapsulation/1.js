/*
function count() {
    var cnt = 0;
    return function incrementCount() {
        cnt++;
        console.log(cnt);
    };
}

var fun = count();
fun();
fun();

// This will create own separete copy of it's own not get conflicted up with above one
var fun1 = count();
fun1();
*/

/*----------------------  Function Constructor -----------------*/
function Count() {
  var cnt = 0;
  this.incrementCount = function () {
    cnt++;
    console.log(cnt);
  };
  this.decrementCount = function () {
    cnt--;
    console.log(cnt);
  };
}

var fun = new Count();
fun.incrementCount();
fun.decrementCount();
