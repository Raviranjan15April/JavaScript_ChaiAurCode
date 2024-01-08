/*
Summary of Datatype:-
primitive data type:- number, string, boolean, undefined, null, Bigint & Symbol
non primitive(reference) data type:- Array, object, function
Note:- typeof null is object, typeof undefined is undefined and type of function is function. But in javascript it is called function object.
*/
// Symbol are used for uniqueness.
let sym01 = Symbol('123');
let sym02 = Symbol('123');
console.log(sym01 == sym02);        // false
console.log(sym01 === sym02);       // false

// BigInt are used for big number.
let bigNumber = BigInt(1234);
console.log(bigNumber);             // 1234n
console.log(typeof bigNumber);      // bigint

let bigNumber02 = 1234n;
console.log(bigNumber02);           // 1234n
console.log(typeof bigNumber02);    // bigint