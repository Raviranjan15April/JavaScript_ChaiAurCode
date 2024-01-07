// Conversting in to number.

// let variable01 = "333";
// let convertedResult = Number(variable01);
// console.log(convertedResult);               // 333
// console.log(typeof convertedResult);        // number

// let variable01 = "333abc";
// let convertedResult = Number(variable01);
// console.log(convertedResult);               // NaN
// console.log(typeof convertedResult);        // number

// let variable01 = true;
// let convertedResult = Number(variable01);
// console.log(convertedResult);               // 1
// console.log(typeof convertedResult);        // number

// let variable01 = false;
// let convertedResult = Number(variable01);
// console.log(convertedResult);               // 0
// console.log(typeof convertedResult);        // number

// let variable01 = null;
// let convertedResult = Number(variable01);
// console.log(convertedResult);               // 0
// console.log(typeof convertedResult);        // number

// let variable01 = undefined;
// let convertedResult = Number(variable01);
// console.log(convertedResult);               // NaN
// console.log(typeof convertedResult);        // number

/*
Conversion In to Number:-
we can do that by passing that variable in to Number.
    syntax:-  Number(variable).
"333" --> 333 & type is number
"333abc" --> NaN(Not a Number) & type is number
true     --> 1 & type is number
false    --> 0 & type is number
null     --> 0 & type is number
undefined --> NaN(Not a Number) & type is number
Note:- type of NaN is "number".
*/

// Conversting in to string.
// let variable01 = 333;
// let convertedResult = String(variable01);
// console.log(convertedResult);               // 333
// console.log(typeof convertedResult);        // string

// let variable01 = true;
// let convertedResult = String(variable01);
// console.log(convertedResult);               // true
// console.log(typeof convertedResult);        // string

// let variable01 = false;
// let convertedResult = String(variable01);
// console.log(convertedResult);               // true
// console.log(typeof convertedResult);        // string

// let variable01 = null;
// let convertedResult = String(variable01);
// console.log(convertedResult);               // null
// console.log(typeof convertedResult);        // string

// let variable01 = undefined;
// let convertedResult = String(variable01);
// console.log(convertedResult);               // undefined
// console.log(typeof convertedResult);        // string

/*
Conversion In to String:-
we can do that by passing that variable in to String.
    syntax:-  String(variable).
333      --> 333 & type is string
true     --> true & type is string
false    --> false & type is string
null     --> null & type is string
undefined --> undefined & type is string
*/

/*
Conversion In to Boolean:-
Note:- false, 0, "" (empty string), null, undefined & NaN are falsy value except everything is truthy value.
*/

// Operations:-
console.log(3+2);       // 5 ; addition
console.log(3-2);       // 1 ; subtraction
console.log(3*2);       // 6 ; multiplication
console.log(3**2);      // 9 ; power
console.log(3/2);       // 1.5 ; division
console.log(3%2);       // 1 ; reminder


console.log("1" + 2);   // 12 
console.log(1+ "2");   // 12 
console.log("1" + 2 + 2);   // 122 
console.log(1 + 2 + "3");   // 33 
/*
Note:- Operation will start from the left to right so above question is based on this concept only
*/

/*
Difference between postfix increment & prefix increment.
postfix increment:- the increment operator increments and returns the value before incrementing. Ex(x++);
prefix increment:- the increment operator increments and returns the value after increment.Ex(++x);
*/

let x = 3;
const y = x++;
console.log(x);     // 4
console.log(y);     // 3

let a = 3;
const b = ++a;
console.log(a);     // 4
console.log(b);     // 4
