const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")

function changeText(element, text, color, time, onSuccess,OnFailure){
    const id = setTimeout(() => {
        if(element){
            element.textContent = text;
            element.style.color = color;
            console.log(id)
            if(onSuccess){
                onSuccess();
            }
        }else{
            if(OnFailure){
                OnFailure();
            }
        }
    },time)
}

setInterval(() => {
    changeText(heading1,"Aditya","red",1000,() => {
        changeText(heading2,"poojan","purple",1000,() => {
            changeText(heading3,"Namra","yellow",1000,() => {
                changeText(heading4,"Prince","orange",1000,() => {
                    changeText(heading5,"Kanan","green",1000,() => {
                        changeText(heading6,"Parshwa","gray",1000,() => {
                            changeText(heading7,"Adarsh","pink",1000,() => {

                            },() => {console.log("Element7 doesnote exist")})
                        },() => {console.log("Element6 doesnote exist")})
                    },() => {console.log("Element5 doesnote exist")})
                },() => {console.log("Element4 doesnote exist")})
            },() => {console.log("Element3 doesnote exist")})
        },() => {console.log("Element2 doesnote exist")})
    },() => {console.log("Element1 doesnote exist")})
}, 0);

changeText(heading1,"heading1","red",1000,() => {
    changeText(heading2,"heading2","black",1000,() => {
        changeText(heading3,"heading3","black",1000,() => {
            changeText(heading4,"heading4","black",1000,() => {
                changeText(heading5,"heading5","black",1000,() => {
                    changeText(heading6,"heading6","black",1000,() => {
                        changeText(heading7,"heading7","black",1000,() => {
                        },() => {console.log("Element7 doesnote exist")})
                    },() => {console.log("Element6 doesnote exist")})
                },() => {console.log("Element5 doesnote exist")})
            },() => {console.log("Element4 doesnote exist")})
        },() => {console.log("Element3 doesnote exist")})
    },() => {console.log("Element2 doesnote exist")})
},() => {console.log("Element1 doesnote exist")})