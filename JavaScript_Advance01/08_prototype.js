/*
Note:- our ojective is to create a method that will give you actual length of the string.
    ex:- const name = "hitesh"                  // output length :- 6 
        const randomName = "hitesh       "      // output length :- 13 but expecting 6.
without using the trim, i mean to say create a method that can be called using the dot methos with any of the string that will give you true length.
*/

let heros = ["thor", "hulk"];

let user = {
    name : "John",
    age: 30,
}

Object.prototype.sayHello = function(){         // creating prototype using the object. This method will be available for any of the object.
    console.log(`${this.name} is saying hello`);
};

user.sayHello();            // Output:- John is saying hello; Here i am accessing the created prototype method.

// Note:- in javascript everything is object if you created any prototype that will be availabe for array as well as string. becouse in javascript everything is object.

heros.sayHello();          // Output:- undefined is saying hello

// Below we are creating prototype for array that will be only available for array.
Array.prototype.giveLenth = function(){
    console.log(`length of the array is ${this.length}`);
}

heros.giveLenth();          // Output:- length of the array is 2
// user.giveLenth();           // Output:- TypeError: user.giveLenth is not a function

/*
Summary:- so summary of the prototype is everything in javascript is object.

    String  ----> Object ----> null
    Array  ----> Object ----> null
    function  ----> Object ----> null

if you create any prototype in object it will be availabe for all type of datatypes like string, object, array, & function.

but if create any prototype for the array it will not available for object.

*/

// inheritance:- accessing the property & method from one object to the another object.

const studen = {
    name: "john",
    course: "JavaScript"
}

const teacher = {
    isFullTime: true,
    isCoursePaid: true
}

console.log(studen);                // Output:- { name: 'john', course: 'JavaScript' }
console.log(teacher);               // Output:- { isFullTime: true, isCoursePaid: true }

// In above example we are not inheriting the property from one object to another. that can be done using the inheritance in below ways.

const assignment = {
    isAssignmentGiven: true,
    __proto__: teacher                  // this is old ways for doing the inheritance
}
console.log(assignment);                // Now we have access of all the property from the teacher object.
console.log(assignment.isCoursePaid)

Object.setPrototypeOf(studen, assignment);      // this is the modern ways of doing inheritance. 
console.log(assignment.isFullTime);     

// below is code for giving true length.
const anotherUser = "chaiAurCode        ";
console.log(anotherUser.length);

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length of ${this} is ${this.trim().length}`);
}

anotherUser.trueLength();           // Output:- true length of chaiAurCode          is 11
"hitesh".trueLength();              // Output:- true length of hitesh is 6
"ravi     ".trueLength();           // Output:- true length of ravi is 4


// Note:- this is all about th prototype and inheritance in javaScript.