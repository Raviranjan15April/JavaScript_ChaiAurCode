/*
Spread Operator:- are used to spread the element of array.
*/
let arr01 = ["apple", "ball", "cat", "dog"];
let arr02 = ["elephant", "fish", "goat", "ink"];
let result = [... arr01, ... arr02];
// console.log(result);            // output:- ["apple", "ball", "cat", "dog", "elephant", "fish", "goat", "ink" ];

/*
flat():- return the new array with all the sub-array element concatenating in to one.
    syntax:- falt(depth);
*/
let arrFlat = ["apple", "ball", "cat", "dog", ["elephant", "fish", ["goat", "ink", ["jack", ["kite"]]]]];
let faltResult = arrFlat.flat(Infinity);
console.log(faltResult);        // output:- ["apple", "ball", "cat", "dog", "elephant", "fish", "goat", "ink", "jack", "kite" ];

/* 
isArray():- determine the passes array is array or not return the boolean value.
*/
let arr03 = ["apple", "ball", "cat", "dog"];
console.log(Array.isArray(arr03));      // output:- true

console.log(Array.isArray("ramesh"));   // output:- false

/*
Array.of():- is static method that are used to create the array from the variable regardless the type of variable 
    syntax:- Array.of(element1, element2, .... elementN);
*/
const newArray = Array.of("John", "Deo", 1, 2, true);
console.log(newArray);                  // output:- [ 'John', 'Deo', 1, 2, true ]
console.log(typeof newArray);           // output:- object
console.log(Array.isArray(newArray));   // output:- true