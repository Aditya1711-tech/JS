const symb = Symbol("key1");
// console.log(symb);

const jsUser = {
  name: "Aditya",
  email: "aditya.kaneriya@drcsystems.com",
  age: 21,
  [symb]: "key1",
  city: "Mangrol",
  isLoggedIn: false,
  lastLogActivity: ["Monday", "Saturday"],
  "college name": "DDU",
};

/*--------- 2 ways of accessing ---------*/
/*
console.log(jsUser.name);
console.log(jsUser["name"]);
*/

/*
Why do we need 2 ways ??
By only second way you can access college name or [symb]
console.log(jsUser["college name"]);
// console.log(jsUser.symb); // undefined
console.log(jsUser[symb]); // key1
*/

/*--------- Adding functions to object ------------*/
jsUser.greeting = function () {
  console.log(`Hello ${this.name}`);
};

jsUser.greeting();

/*------------ Freeze any object ---------------*/
Object.freeze(jsUser);
jsUser.name = "Poojan";
console.log(jsUser); // It will print object with old name
