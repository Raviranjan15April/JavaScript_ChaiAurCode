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

/* 
at():- 
return the element at the given index. if given index is negative it will start from end.
if out of range it will give you undefined.

*/
console.log(arryUisngNewKeyword.at(0));         // output:- john
console.log(arryUisngNewKeyword.at(6));         // output:- undefined
console.log(arryUisngNewKeyword.at(-1));        // output:- deo
console.log(arryUisngNewKeyword.at(-5));        // output:- undefined

/*
concat():-
are used to concatanate/merge the two or more array and return a new array. 
*/
let concatArray01 = [1, 2, 3];
let concatArray02 = [4, 5, 6];
console.log(concatArray01.concat(concatArray02));   // output:- [ 1, 2, 3, 4, 5, 6 ]

/*
push()/pop:- add/delete element in end of the array and return the end of array/removed element.
*/
// push
let arrPush = [12, 23, 34, 45];
let resultPush = arrPush.push(50);
console.log(arrPush);                   // output:- [ 12, 23, 34, 45, 50 ]
console.log(resultPush);                // output:- 5

// pop
let arrPop = [12, 23, 34, 45];
let resultPop = arrPop.pop();
console.log(arrPop);                   // output:- [ 12, 23, 34 ]
console.log(resultPop);                // output:- 45

/*
unshift/shift:- add/delete at the begining of the array. return the lengthof arrat/removed element.
*/
// unshift
let arrUnshift = [12, 23, 34, 45];
let resultUnshift = arrUnshift.unshift(89);
console.log(arrUnshift);                    // output:- [ 89, 12, 23, 34, 45 ]
console.log(resultUnshift);                 // output:- 5

// shift
let arrShift = [12, 23, 34, 45];
let resultShift = arrShift.shift();
console.log(arrShift);                    // output:- [ 23, 34, 45 ]
console.log(resultShift);                 // output:- 12

/*
includes():- it will return the boolean value if the element presents in array.
    syntax:- arry.includes(searchElement, fromiIndex)
*/
let arrayIncludes = [12, 23, 34, 45, 56, 34];
console.log(arrayIncludes.includes(34));        // output:- true
console.log(arrayIncludes.includes(90));        // output:- false
console.log(arrayIncludes.includes(34, 3));     // output:- true

/*
join():- return the new string by concatnating the all the element of the array. seperated by given seperator.
    syntax:- array.join(seperator);
*/
let arrayJoin = ["john", "deo", "peter"];
console.log(arrayJoin.join(" "));                   // output:- john deo peter
console.log(typeof arrayJoin.join(" "));            // output:- string

/*
slice():- take portion of array and return in the new array 
    syntax:- slice(start, end)
end index is not included. negative index means start from end.
*/
let arraySlice = ["apple", "Ball", "cat", "dog", "element", "fox"];
let sliceArray = arraySlice.slice(1,4);
console.log(sliceArray);            // output:- [ 'Ball', 'cat', 'dog' ]
console.log(arraySlice);            // output:- [ 'apple', 'Ball', 'cat', 'dog', 'element', 'fox' ]

/*
splice():- are used to remove the element in between the array. and it mutate the original array. and return the deleted element in a array.
    syntax:- splice(start, deleteCount)/ splice(start, deleteCount, item01, item02)

Note:- Difference between slice & splice is:- 
in slice it will return the new array but in case of splice it will mutate the original array. 
*/
let arraySplice = ["apple", "Ball", "cat", "dog", "element", "fox"];
console.log(arraySplice);               // output:- [ 'apple', 'Ball', 'cat', 'dog', 'element', 'fox' ]
let spliceArray = arraySplice.splice( 3, 2);
console.log(spliceArray);               // output:- [ 'dog', 'element' ]
console.log(arraySplice);               // output:- [ 'apple', 'Ball', 'cat', 'fox' ]