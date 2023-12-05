/*
Async and await combination is used to handle promises in a better way.
*/

const p = new Promise((resolve, reject) => {
  resolve("Hello");
});

/*---------------- How promises can be handled without async functions -----------*/
/*
function hello() {
  p.then((data) => console.log(data));
}
hello(); // OUTPUT: Hello
 */

/*---------------- How promises can be handled with async functions -----------*/
async function hello1() {
  const data = await p;
  console.log(data);
}
hello1(); // OUTPUT: Hello
