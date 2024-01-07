/*
Stack & Heap Memory:-
In javascript we stored any variable in either stack or heap memory.
In stack only primitive data type will get stored, and if you reassign that value to any variable in this case only value will get copy to the another value. so changing the value will not impact the original value.

But in heap only reference(non primitive) data type will get stored. and if you reassign that value to any variable in this case reference of that value will get copy to the another value. so changing the value will impact the original value.
*/

// Stack.
let firstValue = "John";
console.log(firstValue);            // John
let secondValue = firstValue;
console.log(secondValue);           // John
secondValue = "John Deo";
console.log(firstValue);            // John     ; After changing the second value first value is not changed.
console.log(secondValue);           // John Deo

// Heap.
let obj01 = {
    id: 123,
    accountName: "Ravi",
}
console.log(obj01);                 // { id: 123, accountName: 'Ravi' }
let obj02 = obj01;
console.log(obj02);                 // { id: 123, accountName: 'Ravi' }
obj02.id = 1234;
console.log(obj01);                 // { id: 1234, accountName: 'Ravi' }; After changing the second value first value is also changed.
console.log(obj02);                 // { id: 1234, accountName: 'Ravi' }; 