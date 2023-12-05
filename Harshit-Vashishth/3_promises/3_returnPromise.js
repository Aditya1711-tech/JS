/*
Note here that then() always returns a promise that's why we can use .catch() after then().
So because of it we can chain them.
*/

function myPromise() {
  return new Promise((resolve, reject) => {
    resolve("foo");
  });
}

myPromise()
  .then((value) => {
    console.log(value);
    value += "bar";
    // Here this return is returning promise not just value so we can chain another than after this then.
    // Internally this is working like return Promise.resolve(value)
    // And if here nothig is returned from this then it will return undefined check by commenting it
    return value;
  })
  .then((value) => {
    console.log(value);
  });
