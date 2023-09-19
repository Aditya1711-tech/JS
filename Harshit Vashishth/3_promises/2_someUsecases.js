function myPromise() {
  return new Promise((resolve, reject) => {
    const val = true;
    setInterval(() => {
      if (val) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}

/*
Note here that then() always returns a promise that's why we can use .catch() after then()
*/

myPromise()
  .then(() => {
    console.log("Promise Resolved");
  })
  .catch(() => {
    console.log("Promise Reject");
  });

// This will directly return 5
const myPromise1 = Promise.resolve(5);
myPromise1.then((val) => {
  console.log(val);
});
