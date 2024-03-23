/*
Array:-
Used to store multiple items under single variable, access by using index, zero based index.
Array can be created by using the new keyword.

Array copy operation create a Shallow Copy:-
Shallow Copy :- a Shallow copy of an object is a copy whose properties share the same reference of source object from which copy was made.
As a result when you change the source/copied object it will change the other object too.
Example:- array, object 

Deep Copy:- A deep copy of an object is copy whose properties doesn't share the same reference of source object from which copy was made.
As a result when you change the source/copied object it will not change the other object.   
Example:- string, number, Boolean etc....

*/

let numberArray = [ 1, 2];
let stringArray = [ "one", "two"];
let booleanArray = [true, false];
let mixedArray = [ 1, 2, "one", "two", true, false, null, undefined, [3, 4], {name:"john deo"}];
let arryUisngNewKeyword = new Array( "john", "deo");

// Accessing the element of array.
console.log(arryUisngNewKeyword[0]);            // output:- john 

// Array Method & property.

// .length:- will give you the length of the array.
console.log(numberArray.length);                // output:- 2
