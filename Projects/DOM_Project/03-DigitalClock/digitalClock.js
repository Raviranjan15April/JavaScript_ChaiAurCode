const target = document.querySelector(".digital-clock");


    setInterval(()=>{
        const todaysTime = new Date().toLocaleTimeString();
        target.innerHTML = `${todaysTime}`;
    }, 1000);

// Note:- setInterval will run the callback on every time interval 