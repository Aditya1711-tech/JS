function func(){
    var count =1;
    return function func1(){
        if(count ==1){
            console.log("Hii you called me");
            count++;
        }else{
            console.log("Mai already call ho chuka hu");
            count++;
        }
    }
}
const aditya = func();
aditya();
aditya();
aditya();

const poojan = func();
poojan()
poojan()
