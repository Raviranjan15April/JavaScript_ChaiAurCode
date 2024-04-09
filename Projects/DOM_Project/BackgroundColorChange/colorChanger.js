const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        const selectedColor = e.target.id;
        if(selectedColor === "grey"){
            body.style.backgroundColor = `${selectedColor}`
        }
        else if(selectedColor === "white"){
            body.style.backgroundColor = `${selectedColor}`
        }
        else if(selectedColor === "blue"){
            body.style.backgroundColor = `${selectedColor}`
        }
        else if(selectedColor === "yellow"){
            body.style.backgroundColor = `${selectedColor}`
        }
    })
})
