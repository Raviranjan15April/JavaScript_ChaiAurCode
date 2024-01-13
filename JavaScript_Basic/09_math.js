/*
Math:- javascript object that are used for mathematical operations in javascript.

Below are few inportant method of Math in javascript.
abs() :- returns absolute value of number.
ceil() :- round of and return the highest number.
floor() :- round of and return the lowest number.
max() :- return the maximum number from the argunment.
min() :- return the minimum number from the argunment.
random() :- will geneerates random number that is between 0 and 1.
round() :- round off the number and return the nearest number.
*/

console.log(Math.abs(-67.90));          // 67.9

console.log(Math.ceil(0.95));           // 1
console.log(Math.ceil(4));              // 4
console.log(Math.ceil(7.004));          // 8
console.log(Math.ceil(-7.004));         // -7

console.log(Math.floor(0.95));           // 0
console.log(Math.floor(4));              // 4
console.log(Math.floor(7.004));          // 7
console.log(Math.floor(-7.004));         // -8

console.log(Math.max(1, 3, 2));         // 3
console.log(Math.max(-1, -3, -2));      // -1
const array1 = [1, 3, 2];
console.log(Math.max(...array1));       // 3

console.log(Math.min(1, 3, 2));         // 1
console.log(Math.min(-1, -3, -2));      // -3
const array2 = [1, 3, 2];
console.log(Math.min(...array2));       // 1

console.log(Math.random());

console.log(Math.round(8.9875));            // 9
console.log(Math.round(0.9));               // 1
console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));       // 6 6 5
console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));    // -5 -5 -6