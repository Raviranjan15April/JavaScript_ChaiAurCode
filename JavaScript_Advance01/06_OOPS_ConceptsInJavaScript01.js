/* 
Note:- yes JavaScript have classes, but behind the scene javascript is prototype based inheritance.

Object:- collection of properties and methods.

Parts of OOPS:-
    Object literal
    Constructor function 
    Prototype
    Classes 
    Instances(new, this)

4 Pillars
    Abstraction 
    Encapsulation
    Inheritance
    Polymorphism 
*/

// Object Literal 
const user = {
    userName: "Raviranjan",
    isLoggedIn : true,
    loginCount : 8,
    getDetails:function(){
        console.log("get user details from database");
        console.log(`user full name is ${this.userName} Kumar`)
    }
}

console.log(user);          // whole object will be output
user.getDetails()           // this will give you details method output.

// Note:- this refers to the current instance of the object. issue with the object literal is whenever you want to create the new object you have to repeat your self a lot. that can be resolve by using the constructor method.


/* 
Constructor function :- new keyword is the constructor that will create the new instance. when we will used new keyword then below things will happen,
    a. empty object will created.
    b. whatever parameter we rae passing it will wrap.
    c. new instance will created
    d. it will give it to as a new object.
*/

// creating object by using the constructor function 
function userValue(fullName, isLogedIn, isActiveUSer){
    this.fullName = fullName;
    this.isLogedIn = isLogedIn;
    this.isActiveUSer = isActiveUSer;
}

const userOne = new userValue("Raviranjan", true, false);   // using the new keyword creating the new instance of the constructor function.
console.log(userOne);           // {fullName: 'Raviranjan', isLogedIn: true, isActiveUSer: false}

