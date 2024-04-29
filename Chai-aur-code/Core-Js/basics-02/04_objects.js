/*------ Nesting of objects -----------*/
const user = {
  id: 1,
  name: {
    userName: {
      finrstName: "Aditya",
      lastName: "Kaneriya",
    },
  },
  address: {
    city: "Mangrol",
    district: "Junagadh",
  },
};

// console.log(user.name.userName.finrstName);

/*---------- Combine two objects ----------*/
/*
const obj1 = { 1: "one", 2: "two" };
const obj2 = { 3: "three", 4: "four" };

const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

const obj4 = { ...obj1, ...obj2 };
// console.log(obj4);
*/

/*-------------- Get keys and objescts  --------------*/
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.keys(user.name.userName));
