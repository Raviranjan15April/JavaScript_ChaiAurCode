const start = document.querySelector("#start");

const stop = document.querySelector("#stop");

let reference; 

let generateColor = () => {
    const randomColor = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += randomColor[Math.floor(Math.random() * 16)]
    }
    return color;
}

const startListner = () =>{

    const changeColor = () =>{
        document.body.style.backgroundColor = generateColor();
    }
    if(!null){
        reference = setInterval(changeColor, 1000);
    }
}

const stopListner = ()=> {
    clearInterval(reference);
    reference = null;
}
start.addEventListener("click", startListner)

stop.addEventListener("click", stopListner)
