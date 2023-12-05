// Closures :: Closures are nothing but function along with it's lixical scope

/*-----------------------  For more understanding check this out -------------------------------*/
/*
function x() {
    let a = 100;
    function y() {
        console.log(a);
    }
    return y;
}

var z = x();
// NOTE :: After returning from x and storing into z y is out of scope but still it knows value of a.. How....???
// Here closure comes to picture that when it returns from x it comes along with it's lexical scope so that's called closure. This is how still z knows value of a
console.log(z);
z();
*/
function x() {
  let a = 100;
  function y() {
    console.log(a);
  }
  a = 10;
  return y;
}

var z = x();
console.log(z);
z();
// This will print 10 because when it returned it comes with referance to the variable not value of variable
