// For of loop :- it will give you value/iterable from the array. Basically for-of loop will be used in array 

let arr = [ "john", "peter", "devid"];
for(let val of arr){
    console.log(`value in array ${val}`);       // Output:- value in array john/peter/devid 
}

// Map:- it will similar to object. it also hold the in key value pair. only diffrence is that in map it will remember the order of insertation of key. map will not take duplicate key.

const map = new Map();
map.set("1", "One" );
map.set("2", "Two" );
map.set("3", "Three" );
console.log(map);           // Output:- Map(3) { '1' => 'One', '2' => 'Two', '3' => 'Three' }

// using for of loop on map
for(let val of map){
    console.log(val);       // this will give key and value in a form of array. [ '1', 'One' ], [ '2', 'Two' ], [ '3', 'Three' ]
}

for(let [key, value] of map){
    console.log(` key of map is ${key} and their value is ${value}`)
}

/*
Output :- 
key of map is 1 and their value is One
key of map is 2 and their value is Two
key of map is 3 and their value is Three
*/

// for of loop in object
let myObj01 ={
    name : "John",
    age: 28,
    job : "Softwere Engineer"
}

// for(let obj of myObj01){
    // console.log(obj);        // thi will give ypu error that myObj01 is not iterable.
// }

// for-in loop:- this loop will return the index/key from the array/object. Basically this loop mostly will be used in object.
let myObj02 ={
    name : "John",
    age: 28,
    job : "Softwere Engineer"
}

// for-in loop with object
for(let key in myObj02){
    console.log(`key of Object ${key} and their respective value ${myObj02[key]}`);
}

// for-in loop with Array:- it will always return undefined.
let arr01 = ["JavaScript", "Java", "Ruby"];
for(let ele in arr01){
    console.log(ele);       // Output:- it will give you index of array; yes index array is number 
}

// forEach Loop:-
let arr02 = ["JavaScript", "Java", "Ruby", "python"];
// forEach method always return undefined
let result = arr02.forEach((ele)=>{
    return ele;       
});
console.log(result);            // Output:- undefined

arr02.forEach((ele)=>{
    console.log( ele );         // Output:- JavaScript/Java/Ruby/python
});

// Note:- callback function in forEach loop take iterable. index and whole array as an parameter.