// This will give typeError
const a = 100;
a = 10000;
console.log(a);

// This will give referanceError
// Because of temporal deadzone we will get this error
// Temporal deadzone: Time for which a is undifined and also in some different memory location other than global scope so that it is not accecible untill it get intialized.
// To avoid Temporal deadzone it is good practice to declare variables at the top of scope
/**
 * 
console.log(a);
const a = 100;
*/

// this will give syntexError because you must assign value to const varible at time of declaration
// But in case of let and var it is acceptable that you don't assign value at time of declaration
/**
 * 
 const a;
 console.log(a);
 */
