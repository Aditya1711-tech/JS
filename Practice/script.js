// var sym = Symbol(10);
// var sym2 = Symbol(10);

// var a = null;
// var b = 1;
// if ([] == a) {
//   console.log("Both are same");
// } else {
//   console.log("Both are different");
// }

// console.log(typeof []);
// console.log(typeof b);

/*---------------- Hoisting ------------------*/
// hoisted = 0;
// console.log(hoisted);
// var hoisted;

// hoistedFun();

// function hoistedFun() {
//   var x;
//   console.log(x);
//   x = 3;
// }

/*-------------- Let can't be hoisted ------------ */
// y = 5;
// console.log(y);
// let y;

/*----------------- == And === -----------------------*/

// var a = 2;
// var b = "2";

// console.log(a == b);
// console.log(a === b);

/*------------- ImplicitTypeCoercion --------- */

// var x = 1;
// let y = "2";

// console.log(typeof (y - x));
// console.log(typeof (y + x));

/*------------- Immediatly invoked function expression -------------*/
// (function () {
//   console.log("IIFE invoked");
// })();

/*------------ this key-word -----------*/
// function fn() {
//   console.log(this);
// }
// fn();

// var obj = {
//   name: "Aditya",
//   getName: function () {
//     console.log(this.name);
//   },
// };

// var getName = obj.getName;

// var obj2 = { name: "Poojan", getName: getName };
// obj2.getName();

/*------------ call(),apply(),bind() methods ---------- */

// function print(message) {
//   console.log("This is " + this.name + message);
// }

// let user1 = {
//   age: 21,
//   getAge: function () {
//     console.log("Age of " + this.name + " is " + this.age);
//   },
// };

// let user = { name: "Aditya", lastName: "Kaneriya", age: 23 };

// print.call(user, " This is call method");
// // call() allows object to call method of another object also
// user1.getAge.call(user);

// // bind() is same as call(), difference is just that it take arguments as array
// print.apply(user, [" This is apply method"]);

/*------------ exec() and test() -------------*/

// let name = "Aditya";
// let res = name.exec("ad");
// console.log(res);

/*----------- constructor function ----------*/

const Person = function (name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  this.calculateDOB()  = function(){
    return 2023 - this.age;
  }
};

let person1 = new Person("Aditya", 20, "Male");
console.log(person1);
const year = person1.calculateDOB();
console.log(year);
