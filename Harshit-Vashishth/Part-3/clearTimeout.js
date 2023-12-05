console.log("Code start")

//setTimeout() function returns a unique id. By storing that id in a variable and we can using that id we can manage working of function inside setTimeout() function
var id = setTimeout(()=>{
    console.log('Inside set timeout 1')
},1000)//This 1000 is minimun wait 

for(let i=1;i<100;i++){
    console.log('...')
}
console.log("callbac id id: "+ id)
console.log("Clearing time out")//By clearing id we inform that no need to run function inside time out
clearTimeout(id)
console.log("Code ends")