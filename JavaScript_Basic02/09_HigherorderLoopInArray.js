// For of loop :- it will give you iterable.

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

for(let obj of myObj01){
    // console.log(obj);        // thi will give ypu error that myObj01 is not iterable.
}