console.log("Code start");

// When while code finished then this will start executing no matter how muth time is it take
setInterval(() => {
  console.log(Math.random());
}, 1000);

var x = 10;
for (let i = 1; i < 1000000; i++) {
  x = x * i;
  console.log(x);
}

console.log("Code end");
