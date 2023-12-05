const body = document.body
const button = document.querySelector('button')
console.log(button)
const intervalid = setInterval(() => {
    var red = Math.floor(Math.random() * 125)
    var green = Math.floor(Math.random() * 125)
    var blue = Math.floor(Math.random() * 125)
    var rgb = `rgb(${red},${green},${blue})`
    
    body.style.background = rgb;
}, 1000);

button.addEventListener('click',() => {
    clearInterval(intervalid)
    button.textContent = body.style.background
})