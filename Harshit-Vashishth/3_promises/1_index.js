// What is promise :: we use promise when currently we don't know value but in future we will get value of it, There we use promise. Promise is a class in JS

// There are three state of any promise 1.Pending 2.Resolve 3.Reject

// Understand it with an exaple
/*
Let say we want to make fried rice from left over things in kichen.
So initially we dont't know that is it possible to make friedrice or not so, here we create promise.
We initally have array of left over things.
*/

console.log("Script starts");
const leftOvers = ["coffee", "salt", "tomato", "rice", "salt", "sugar"];

// Create promise
// When we create promise it will store into JS memory with status and value of it.
// {value: "Some value" ,status:"Pending/Resolve/Reject"}
const frideRice = new Promise((resolve, reject) => {
  if (
    leftOvers.includes("salt") &&
    leftOvers.includes("rice") &&
    leftOvers.includes("tomato")
  ) {
    /*Note here we can pass anything into resolve and reject like array,object,string any thing*/
    resolve("Fried Rice");
  } else {
    reject(new Error("Can't do it"));
  }
});

// Consume promise
/*
Here if remove any of salt,rice or tomato from left overs then it will get rejected and print error into console
*/
/*
Note here this consumption of promise is performed asynchronusly it means it will performed by browser API. We can observe in output it will show output of promise after whole code execution end.
And also callbacks in then and catch are stored into microtask queue not in callback queue.
*/
frideRice
  // When promise get resolved
  .then((value) => {
    console.log("Let's eat", value);
  })
  //   When promise get rejected
  .catch((error) => {
    console.log(error);
  });

// Or we can pass both resolve and reject to then callback. Both will give same output
frideRice.then(
  // When promise get resolved
  (value) => {
    console.log("Let's eat", value);
  },
  //   When promise get rejected
  (error) => {
    console.log(error);
  }
);

for (let i = 0; i < 100; i++) {
  console.log(Math.random(), i);
}

// This will get stored into callback queue which has less priority than michrotask queue
// So first get output of then/catch then output of settimeout
setTimeout(() => {
  console.log("Hello from callback queue");
}, 1000);

console.log("Script ends");

// OUTPUT
/*
Output:
Script starts
0.6496961847566565 0
0.07003220880761951 1
0.6892651355813766 2
0.23141951608716216 3
0.9522314632937734 4
0.777081496121437 5
0.7763050736691046 6
0.19875934101009918 7
0.060202238708557676 8
0.4504456887243278 9
0.9916997560525715 10
0.6235668738703655 11
0.5291540497938734 12
0.09012568731624326 13
0.6448807965252394 14
0.284255621373082 15
0.8665873035985001 16
0.9350581738469959 17
0.7254735879831242 18
0.2993241670918858 19
0.5568274835029945 20
0.9826383859088814 21
0.4788391662714284 22
0.507937432767825 23
0.29406496316857345 24
0.19489812509587612 25
0.10198871824982114 26
0.07155826393597464 27
0.6769564920237758 28
0.6076542309379307 29
0.6768625506756041 30
0.11730327122207296 31
0.04986974574661729 32
0.39640789838654644 33
0.3078718369037794 34
0.6554496942004879 35
0.23117707027474177 36
0.2688238435440229 37
0.4505856096045866 38
0.23365271666357335 39
0.47343017986646996 40
0.9848979407697016 41
0.07405526558789077 42
0.2355326202753545 43
0.2598628309658366 44
0.23994150926855107 45
0.14704040917944683 46
0.18725624271738317 47
0.39301531705283654 48
0.7003321611054141 49
0.3540340128634223 50
0.8917230431371483 51
0.47838899706019156 52
0.5966485769276673 53
0.678003586529601 54
0.836034522934056 55
0.6105100996167139 56
0.6733571170720776 57
0.3047130695394369 58
0.3465542471226071 59
0.30056218536586554 60
0.03779400788101683 61
0.10101656453003183 62
0.9659014824824186 63
0.43802832523260515 64
0.1790852818494293 65
0.7976186954374813 66
0.595742043767653 67
0.03541068622637811 68
0.4872076423704026 69
0.9349379068901456 70
0.010259576726880937 71
0.3607530228954483 72
0.514578803095564 73
0.11526498309705269 74
0.6724924082251906 75
0.38207242656301843 76
0.7271698078850743 77
0.3325606057377366 78
0.32609233097129997 79
0.7678848220027905 80
0.0676340492189822 81
0.19967459461232995 82
0.7342614651228618 83
0.7595177043891979 84
0.011115966042877234 85
0.9057086889722004 86
0.0689401573663837 87
0.35003717984178984 88
0.16047971005730566 89
0.002414397937579249 90
0.6610724333278872 91
0.726429708456928 92
0.2895127957868755 93
0.28195187252873666 94
0.49589091388549056 95
0.8742939126949036 96
0.7986817869045049 97
0.8723442316807808 98
0.6292082901133647 99
Script ends
Let's eat Fried Rice
Let's eat Fried Rice
*/
