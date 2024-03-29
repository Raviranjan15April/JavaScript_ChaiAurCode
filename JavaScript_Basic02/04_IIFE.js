/*
Immediately Invoked function expression:- the function which will be executed just after creation.
why IIFE is required:- in some case we don't want variable should be impacted by global scope variable so we used IIFE.
In IIFE when we will used name function it is called named IIFE. we can use arrow function also inside the IIFE.
NOTE:- after one IIFE we need to add semicolon otherwise in next line execution it will throw error.
*/

// Immediately invoked function expression
(function myFun01(){                    // this is also known as named IIFE 
    console.log("From IIFE one")
})();                                   // Output:- From IIFE one

((order)=>{                             // this is anonymous IIFE 
    console.log(`From IIFE ${order}`)   // Output:- From IIFE Two
})("Two")                               // How we can pass argunment in IIFE