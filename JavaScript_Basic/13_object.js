/*
Object:- object can be created by two ways.
    a. Object literal
    b. using constructor(also called as singleton object) 

Note:- How to use symbol as a key in javascript object.
first create the symbol using Symbol.
then add it is as a property using the square bracket [that key]
*/
const sym = Symbol("myKey");
console.log(sym);

// object literal
let myObj = {
    firstName : "John",
    lastName : "deo",
    [sym] : "symbol",                       // this is the way to add symbol in object as key
    email : "johndeo@gmail.com",
    isLoggedIn : true,
    age : 27,
    lastLoggedIn : ["Monday", "saturday"],
    "full Name" : "John Deo" 
}

// How to access the element of object:- by using the dot(.)/squre notation ["key"]
console.log(myObj.age);                 // output:- 27
console.log(myObj["full Name"]);        // output:- John Deo
console.log(myObj[sym]);                // output:- symbol                  

// changing the value
myObj.age = 29;
console.log(myObj.age);                 // output:-  29

// adding the function in object
myObj.greeting = function(){
    console.log("this is function from object");
}
myObj.greeting();                       // output:- this is function from object

// freez the object:- so after freezing the object we can't update any of the propery of that object.
Object.freeze(myObj);
myObj.age = 30;
console.log(myObj.age);                 // output:-  27