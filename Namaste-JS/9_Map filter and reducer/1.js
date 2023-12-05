/*-------------------------------- Map -----------------------------------*/

const arr = [2, 3, 4, 5, 6];

// Get binary of every element
const output = arr.map((x) => x.toString(2));
console.log(output);

// Double of every element
const output1 = arr.map((x) => x * 2);
console.log(output1);

// Tripple of every element
const output2 = arr.map((x) => x * 3);
console.log(output2);

/*----------------------------------- filter -----------------------------------*/

const output3 = arr.filter((x) => x % 2 === 0);
console.log(output3);

/*----------------------------------- reduce -----------------------------------*/
// For finding sum of elements in array
const output4 = arr.reduce((accu, curr) => {
  curr += accu;
  return curr;
}, 0);
console.log(output4);

// For finding maximum element of array
const output5 = arr.reduce((accu, curr) => {
  if (accu > curr) {
    curr = accu;
  }
  return curr;
}, -1);
console.log("Maximul element is: ", output5);

/*----------------------------------- Example on map && reduce -----------------------------------*/
const users = [
  { firstName: "Elon", lastName: "Musk", age: 45 },
  { firstName: "Mark", lastName: "Zuckerburg", age: 35 },
  { firstName: "Lary", lastName: "Page", age: 35 },
  { firstName: "Sundar", lastName: "Pichai", age: 40 },
  { firstName: "Satya", lastName: "Nadela", age: 35 },
];

// QUE : Get array of firstName + lastName
const output6 = users.map((user) => user.firstName + " " + user.lastName);
console.log(output6);

// QUE : Gut object with age as key and count as value
const output7 = users.reduce(function (accu, curr) {
  if (accu[curr.age]) {
    accu[curr.age] = ++accu[curr.age];
  } else {
    accu[curr.age] = 1;
  }
  return accu;
}, {});
// Here {} at the end is showing initial value if acc as empty object
console.log(output7);

/*---------------------------------- A good example on map filter chaining -----------------------*/
// QUE : Print firstNames of all the users whose age is  >= 40
const output8 = users
  .filter((user) => user.age >= 40)
  .map((use) => use.firstName);

console.log(output8);

const output9 = users.reduce((accu, curr) => {
  if (curr.age >= 40) {
    accu.push(curr.firstName);
  }
  return accu;
}, []);
console.log(output9);
