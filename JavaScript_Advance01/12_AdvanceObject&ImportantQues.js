/*
Note:- can we change the value of Math.pi. and if it can be changes then how and if i can't thean also why.
*/

const ValueOfPi = Math.PI;
console.log(ValueOfPi)              // Output:- 3.141592653589793; This is constant value and we can't change it. why can't we change it, it is mentioned below.

const descriptorValue = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptorValue);       // Output:- {value: 3.141592653589793, writable: false, enumerable: false, configurable: false}; here writable property is false so we can't change the value of PI.

// Now we want stop iteration on object.

let myObj = {
    name:"john deo",
    age: 28,
    job: "softwere Engineer",

    getDetails:function(){
        console.log(`${this.name} is ${this.age} year old and woeking as ${this.job}`);
    }
}

const descriptorValueOfObj = Object.getOwnPropertyDescriptor(myObj, "name");
console.log(descriptorValueOfObj);      // Output:- {value: 'john deo', writable: true, enumerable: true, configurable: true}

// now going to set name property could not be iterable.
Object.defineProperty(myObj, "name",{
    writable: false,                // here we are setting writable and enumerable false so this property can't be changes, and loop can't be performed. over this property.     
    enumerable: false,
})

myObj.name = "Peter smith";
console.log(myObj.name);                // output: john deo; after changing the name property of the object but value of this property will remains same becouse we have set value in define property as false.
for(let key in myObj){
    if(typeof myObj[key] !== 'function'){
        console.log(myObj[key]);
    }
   
}
