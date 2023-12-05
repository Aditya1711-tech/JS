// Here let and const are block scopped can not accecible outside the block
/*
 *
{
  // In memory also a will be in globle scope not in block scope
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
console.log(b);
console.log(c);
 */

/*-------------- Shadowing -------------*/
/*
var a = 100;
let b = 200;
const c = 300;
{
  // In memory also a will be in globle scope not in block scope
  // So both upper means globle and block scopped points to same memory location tharefore it will modify value of a. But not same in case of let and const
  // Because both are blocked scopped so globle b,c are on different memory location so global values will not get effected
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
console.log(b);
console.log(c);
 */
/* 
// Outoput
10
20
30
10 //a = 100 is shadowed by a=10;
200
300
*/

/*------------------- Illeagle sshadowing --------------*/
/*
// This is not allowed 
let a = 10;
{
    // Let can not shadowed by var because var is globle scoped so it will effect value of a in globle scope
    var a = 100;
}

// But this allowed 
let a = 10;
function x() {
  var a = 100;
  console.log(a);
}
x();
console.log(a);

// Because var is function scopeed so it will not interfare globle scope
*/

/*
// This can be perforemed 
var a = 100;
{
  let a = 10;
  console.log(a);
}
console.log(a);
*/

/*---------------------- Lexical block scope -------------------*/
/*
const a = 10;
console.log(a);
{
  const a = 100;
  console.log(a);
  {
    const a = 1000;
    console.log(a);
  }
}

var b = 10;
console.log(b);
{
  var b = 100;
  console.log(b);
  {
    var b = 1000;
    console.log(b);
  }
}

let c = 10;
console.log(c);
{
  let c = 100;
  console.log(c);
  {
    let c = 1000;
    console.log(c);
  }
}
 */
