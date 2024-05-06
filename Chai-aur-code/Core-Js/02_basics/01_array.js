const array = [1, 2, 3, 4, 5];
const array2 = new Array(9, 8, 7, 6, 5);
/*
const joinedArray = array.join();
console.log(typeof array); // object
console.log(typeof joinedArray); // string
console.log(joinedArray); // 1,2,3,4,5
*/

console.log("A: ", array); // A:  [ 1, 2, 3, 4, 5 ]
const slicedArray = array.slice(1, 3);
console.log("Sliced: ", slicedArray); // Sliced:  [ 2, 3 ]

console.log("B: ", array); // B:  [ 1, 2, 3, 4, 5 ]
const splicedArray = array.splice(1, 3);
console.log("Spliced: ", splicedArray); // Spliced:  [ 2, 3, 4 ]

console.log("C: ", array); // C:  [ 1, 5 ]
