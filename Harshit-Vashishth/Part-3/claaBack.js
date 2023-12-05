function getTwoNumbersAndAdd(num1,num2,onSuccess,onFailure){
    if(typeof(num1) === "number" && typeof(num2) === "number"){
        onSuccess(num1,num2);
    }else{
        onFailure()
    }
}

function addTwoNumbers(num1,num2){
    console.log(num1 + num2);
}

// function onFailure(){
//     console.log("Please enter numbers only");
// }

getTwoNumbersAndAdd(4,3,addTwoNumbers,() => {
    console.log("Please enter numbers only");
})