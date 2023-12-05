function outer() {
  let a = 10;
  return function inner(b) {
    console.log(a, b);
  };
}

let a = 1000;
a = 100000;
console.log(a);
outer()("Hello Aditya");

/*
function outest() {
    let c = 100;
    return function outer() {
        let a = 10;
        return function inner(b) {
            console.log(a, b, c);
        };
    };
}
var a = 100;

var fun = outest();
var fun1 = fun();
fun1("Poojan");
*/

const Aditya = (a) => {
  console.log(a);
};

var val = Math.random() * 2;
var dec = Number(val.toFixed(2));
console.log(val, dec);
