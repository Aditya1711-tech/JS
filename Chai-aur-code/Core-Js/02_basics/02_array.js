const marvelHeroes = ["ironman", "thor", "captain"];
const dcHeroes = ["superman", "batman", "flash"];

/* 
marvelHeroes.push(dcHeroes);
console.log(marvelHeroes); //[ 'ironman', 'thor', 'captain', [ 'superman', 'batman', 'flash' ] ]
*/

/*
const allHeroes = marvelHeroes.concat(dcHeroes);
console.log(allHeroes); // [ 'ironman', 'thor', 'captain', 'superman', 'batman', 'flash' ]
*/

/*
const allHeroes = [...marvelHeroes, ...dcHeroes];
console.log(allHeroes); // [ 'ironman', 'thor', 'captain', 'superman', 'batman', 'flash' ]
*/

/*
const nestedArray = [1, 2, 3, [4, 5], 6, [7, [8, 9]]];
const combinedArray = nestedArray.flat(Infinity); // INSTEAD OF INFINITY WE CAN GIVE DEPTH IN NUMBER ALSO
console.log(combinedArray);
*/

/*
console.log(Array.isArray("Aditya")); //false
console.log(Array.from("Aditya")); // [ 'A', 'd', 'i', 't', 'y', 'a' ]
console.log(Array.from({ name: "Aditya" })); // INTERESTING: []
*/

const score1 = 100;
const score2 = 200;
const score4 = 300;
const scores = Array.of(score1, score2, score4);
console.log(scores); // [ 100, 200, 300 ]
