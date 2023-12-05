console.log("Code start")

setTimeout(()=>{
    console.log('Inside set timeout 1')
},1000)//This 1000 is minimun wait 

setTimeout(()=>{
    console.log('Inside set timeout 2')
},1000)//This 1000 is minimun wait 

for(let i=1;i<100;i++){
    console.log('...')
}
console.log("Code ends")