/*

in class, first constructor is getting called once the new instance of the classes get created.constructor will get called automatically.
class is synthethic sugar, behind the scene we can acheive everything bu using the constructor.
*/

class UserDetails {
    constructor(useName, email, password){
        this.useName = useName;
        this.email = email;
        this.password = password;
    }

    encryptedpassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.useName.toUpperCase()}`
    }
}

const userOne = new UserDetails("john", "john@gmail.com", '123');
console.log(userOne.encryptedpassword());           // Output:- 123abc
console.log(userOne.changeUserName());              // output:- JOHN

// // Behind the secene
// function UserDetails(useName, email, password){
//     this.useName = useName;
//     this.email = email;
//     this.password = password;
// }

// UserDetails.prototype.encryptedpassword = function(){
//     return `${this.useName}abc`;
// }

// UserDetails.prototype.changeUserName = function(){
//     return `${this.useName.toLowerCase()}`
// };

// const userOne = new UserDetails("peter", "john@gmail.com", '123');
// console.log(userOne.encryptedpassword());           // Output:- 123abc
// console.log(userOne.changeUserName());              // output:- JOHN

/*

inheritance in JavaScript:-

*/ 

class InheritanceExample {
    constructor(userName){
        this.useName = userName;
    }

    logMe(){
        return (`User name is ${this.useName} `)
    }    
}

class HereInheriting extends InheritanceExample{            // Here inheriting the property and method from the another class. extends keyword will provide this features.
    constructor(userName, password, email){
        super(userName);
        this.password = password;
        this.email = email;
    }

    addCourse(){
        return (`A new course  was added by ${this.useName}`);
    }
}

const chai = new HereInheriting("chai", "user@123", "chai@gmail.com");
console.log(chai.addCourse());          // A new course  was added by chai

// Note:- As we have inherit the class "InheritanceExample" in to "HereInheriting" so all the property and method that belong to "InheritanceExample" class, will be available in to "HereInheriting".
console.log(chai.logMe());              // User name is chai 

// Note:- all below answer is false becouse it is not exact the same it is creating new instance from the class so that is answe is false.
console.log(InheritanceExample === HereInheriting);         // false; 
console.log(chai === HereInheriting);                       // false;
console.log(InheritanceExample === chai);                   // false; 


console.log(HereInheriting instanceof InheritanceExample  );         // false; 
console.log(chai instanceof HereInheriting);                         // true;
console.log(chai instanceof InheritanceExample);                     // true; 

// Note:- so in javascript we have keyword instance of that will give you boolean value if you check any class is instance or not.

/*
Static keyword in Javascript:- static keyword are used to defined the static property and method of the class that can be access direclty by class only rather than instance of that class. or event through the inheritance(extends).
*/

class People{
    constructor(firstName, LastName, age){
        this.firstName = firstName;
        this.LastName = LastName;
        this.age = age;
    }

    fullName(){
        return `${this.firstName} ${this.LastName}`;
    }
    static printFullDeatils(){
        return `Hi I am ${this.firstName} ${this.LastName} and i am ${this.age} years old.`
    }
}
const john = new People("john", "deo", 28);
// console.log(john.printFullDeatils());       // TypeError: john.printFullDeatils is not a function
console.log(john.fullName())                    // john deo

class NewPeople extends People{
    constructor(firstName, LastName, age, hobby){
        super(firstName, LastName, age);
        this.hobby = hobby;
    }
    getHobby(){
        return `${this.hobby} is ${this.firstName} ${this.LastName} hobby`;
    }
}

const Peter = new  NewPeople("peter", "smith", 20, "cricket" );
console.log(Peter.getHobby())               // cricket is peter smith hobby

// console.log(Peter.printFullDeatils())       // TypeError: Peter.printFullDeatils is not a function