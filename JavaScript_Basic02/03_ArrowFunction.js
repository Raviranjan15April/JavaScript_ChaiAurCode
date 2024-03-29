/*
This Keyword referes to current context.
*/

let user = {
    userName : "john Deo",
    age: 27,
    welcome: function(){
        console.log(`${this.userName}, welcome to website`);    // here accessing the username need this, so we are taking from this context.
    }
}

user.welcome();         // Output:- john Deo, welcome to website
user.userName = "Sam";  // Here we are changing the userName, so from here this.userName refers to Sam.
user.welcome();         // Output:- Sam, welcome to website

console.log(this);      // Output:- {}; in nod environment when we are checking this it will give you empty object {}, but when you access this in browser it will give you window object(Global object).

// Note:- using the "this" keyword you can access the value in object only. when you try to access the value in function it will give you undefined.
function chai(){
    let userName = "John Deo";
    console.log(this);                  // this will give you big object having all the details; so outside of function it will be empty object but in side function it has value.
    console.log(this.userName);         // Output:- undefined; this referes to current context of object so in function it will not work.
}
chai();

// Note:-  the below arrow function show that "this" is not available in side the arrow function.
let fun01 = () =>{
    console.log(this);                  // { }
}
fun01()

// Arrow function using the explicit return keyword
let fun02 = (a, b) =>{
    return (a + b);
} 
console.log(fun02(3, 5));                // Output:- 8

// Arrow function using the implicit return keyword; Better to warp it () parenthesis, so if any function is returning object with out using parenthesis it will create a issue.
let fun03 = (a, b) => (a + b);
console.log(fun03(6, 7));                // Output:- 13