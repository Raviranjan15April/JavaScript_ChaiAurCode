/*
 
Prototype & new Keyword:-
    bydefault behaviours of javascript is prototypal behaviour. if you are finding something and it is not available directly then it will go level up(will go to parent, if not available there will go to grand parents and keep going untill it will get null).

    In Javascript everything is object.

    array ----> Object ----> null
    string ------> object -----> null
    function ------> object ----> null 

    so above line example that everything is object at the end so you can access the prototype by using the dot notation and that object(prototype) refers to null. 

*/

const superman = ["thor", "hulk"];
console.log(superman);          // here we are getting array along with length property along with object prototype.


// Note:- So based on the below example we have seen that function also have prototype and ultimately it is object. we can access the thing by using the dot notation.

function multiplyBy5(num){
    return 5 * num;
};
multiplyBy5.power = 2;

console.log(multiplyBy5(6));                // Output:- 30
console.log(multiplyBy5.power);             // Output:- 2
console.log(multiplyBy5.prototype);         // Output:- {}

// using the prototype we can create a new method for that.
function myUser(userName, score){
    this.userName = userName;
    this.score = score;
}

myUser.prototype.callMe = function(){
    console.log(`${this.userName} is getting callled`);
}

myUser.prototype.details = function(){
    console.log("constructor method called");
}

const userOne = new myUser("john", 30);
const userTwo = new myUser("peter", 31);

userOne.callMe();                   // Output:- john is getting callled
userOne.details();                  // Output:- constructor method called

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/