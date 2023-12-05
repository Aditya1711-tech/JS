// Part 1
// consol.log prints the value passed to it
// console.log("Hello Aditya");

// Part 2
// Use of var

// var name = 'Aditya';
// var a = 10
// var b = 10
// console.log(a+ " " + b);

// ---------------------------------------------------------------

// Part 3
// Use of let

// let name = "Aditya"
// console.log(name)
// name = "Poiojan"
// console.log(name)

// ---------------------------------------------------------------

// Part 4
// Use of const

// const pi = 3.14
// console.log(pi)
// pi = 3.15    //You cant change value of constant variable

// ---------------------------------------------------------------

// Part 5
// String indexing

// var name = "Aditya  qwert";

// A d i t y a     q w  e  r  t
// 0 1 2 3 4 5 6 7 8 9 10 11 12

// console.log(name[0])
// console.log(name.length)
// Spaces will be included into the index numbers.
// console.log(name[6])

// last index = length -1
// console.log(name[name.length-1])
// console.log(name[name.length-3])

// ---------------------------------------------------------------

// Part 6
// Some operarions on strings

// let name = "Aditya"

// trim() used for removing spaces from both the ends
// console.log(name)
// console.log(name.length)

// Note: String in js is immutable and these function generate new strings not make changes in current string so it must be stored in any variable

// name = name.trim()
// console.log(name)
// console.log(name.length)

// name = name.toUpperCase()
// console.log(name)

// Note: toLowerCase() workd as same

// let newName = name.slice(0,5)
// 4th index will not be considered O/P will be: Adit
// console.log(newName)
