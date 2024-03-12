"use strict";       // Treat all javascript code as new version.

/*
Datatypes in javaScript:-
a. Primitive Data types:-
    number --> numeric value
    string --> can we used " "/''.
    boolean --> true/false
    BigInt --> used largest value 
    symbol --> used for finding the uniqueness.
    undefines --> before initialization of variable
    null --> standalone value 

b. Reference Datatype:-
    object. --> array, function and object everythings comes under reference type data type.
*/

/*
Note:- typeof methos are used to find the data type of the passed variable/function.
Typeof null will give result as "Object". and type of undefined give result as "undefined".
*/

function myFun(){
    console.log("Ravi");
}
myFun();

console.log(typeof myFun);        // function
console.log(typeof myFun());      // string
 
console.log(typeof null);         // object
console.log(typeof undefined);    // undefined
