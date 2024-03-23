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

// Note:- If you want to access any property from object inside the function of that object then that can be access by using the "this" keyword

// merge the two object in to one:- that can be done in two ways. using the Object.assign & spread operator 
let obj01 = { 
    key01 : "Value01",
    key02 : "Value02"
}

let obj02 = { 
    key03 : "Value03",
    key04 : "Value04"
}
// merge the two object in to one object.
let mergeObject = Object.assign({}, obj01, obj02);
console.log(mergeObject);                   // output:- { key01: 'Value01', key02: 'Value02', key03: 'Value03',key04: 'Value04' }

let mergeObjectUsingSpreadOperator = {...obj01, ...obj02};
console.log(mergeObjectUsingSpreadOperator);    // output:- { key01: 'Value01', key02: 'Value02', key03: 'Value03',key04: 'Value04' }

// object proprty 
// Object.keys:- it will return the array of key.
console.log(Object.keys(obj01));        // output:- [ 'key01', 'key02' ]

// Object.values:- it will return the array of value
console.log(Object.values(obj01));      // output:- [ 'Value01', 'Value02' ]

// Object.hasownproperty:- it will return boolean value if that property is available or not
console.log(obj01.hasOwnProperty("key01"));   // output:- true
console.log(obj01.hasOwnProperty("key"));     // output:- false

// Destructuring of object:-
const cource = {
    name : "React",
    fee : "15K",
    duration : "3 months",
    classes : "everyDay"
}

const { name, fee, duration, classes } = cource;
console.log(name);              // Output:- React
console.log(fee);               // Output:- 15k