/*
Note:- Var having a function scope, let & const is block scope. block is defined by { } so outside of this block is called global scope. 

function declearation can be hoisted but function expression can't be hosted.

Closure:- inner function having access of the variable created by outer function and global scope.
*/

var a = 10;
let b = 20;
const c = 30;
console.log(a);                 // output:- 10
console.log(b);                 // output:- 20
console.log(c);                 // output:- 30

{
var x = 10;
let y = 20;
const z = 30;
console.log(x);                 // output:- 10
console.log(y);                 // output:- 20
console.log(z);                 // output:- 30
}
console.log(x);                 // output:- 10
// console.log(y);                 // output:- not defined
// console.log(z);                 // output:- not defined
// Note:- the above error is coming becouse variable created by let & const will be not accessiable out side the block {}

// introdunction of closure with some example 
let globalVariable = 10;
function outerFun(){
    let outerVariable = 100;
    function innerFun(){
        let innerVariable = 1000;
        console.log("innerVariable", innerVariable);        // Output:- innerVariable 1000
        console.log("outerVariable", outerVariable);        // Output:- outerVariable 100
        console.log("globalVariable", globalVariable);      // Output:- globalVariable 10
    }
    innerFun()
}
outerFun();

// introdunction of Hoisting with some example 
myFun01();                                      // Output:- ==== function Declearation will hoisted =
function myFun01(){
    console.log("==== function Declearation will hoisted =");
}

// myFun02()                             // output:- this will give error; Cannot access 'myFun02' before initialization 
let myFun02 = function(){
    console.log("==== function expression will not hoisted =")
}
myFun02();              // Output:- ==== function expression will not hoisted =