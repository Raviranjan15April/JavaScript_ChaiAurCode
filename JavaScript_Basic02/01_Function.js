/*
Function:- while creating a function we are passing the value is called parameter, and while executing it passing the value is called argunment.

Note:- after the return keyword none of code will be executed. function value can be stored in variable as well.

Value can be given to function by passing the argunment and passing the default value.
*/
// function returning value.
function myFun(a, b){
    return a + b;
}
console.log(myFun(1, 2));               // Output:- 3

// function with default value 
function myFun02(a = 6, b = 5){
    return a + b;
}
console.log(myFun02(4, 5));             // Output:- 9
console.log(myFun02());                 // Output:- 11

/* 
rest operator :- are used to club all the parameter in to array. 
    syntax:- ...arg. it will return the array of argunment.  
*/
function myFun03(val01, val02, ...argu){
    return argu;
};

console.log(myFun03("apple", "ball", "cat", "dog"));        // Output:- [ 'cat', 'dog' ]

// passing the array as an argunment
function myFun04(arrArg){
    return arrArg[0];
}

console.log(myFun04([12, 23, 34]));                         // Output:- 12

// pass