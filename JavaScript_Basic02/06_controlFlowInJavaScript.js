/* comparison operator :-   
>  :- Greater than 
<  :- less than
>= :- greater than equal to
<= :- less than equal 
== :- comparison with value only
===:- comparison with value and datatype as well(strictly checked)
!  :- inversion 
*/

// if else statement
let isUserLoggedIn = true;
if(isUserLoggedIn){
    console.log("User logged in");              // Output:- User logged in
} else{
    console.log("User don't logged in");
}

// if elseif statement
let balance = 100;
if(balance > 100){
    console.log("Balance is greater than 100");
} else if(balance === 100){
    console.log("Balance is equal to 100");     // Output:- Balance is equal to 100
} else{
    console.log("Balance is less than 100");
}

// Combinding the condition:- && is used to check all the condition should be true, || is used to check any of condition should be true.  

// Switch statement
// Note:- Break statement is required in switch statement if you will not add break it will executes all after once condition is matched except default one.

let month = 2;
switch (month) {
    case 0:
        console.log("Month name is Jan")
        break;
    case 1:
        console.log("Month name is Feb")        // Output:- Month name is Feb
        break;
    case 2:
        console.log("Month name is Feb")
        break;
    case 3:
        console.log("Month name is Feb")
        break;
    default:
        console.log("this is defalt case")
        break;
}

// Note:- falsy Value :- false, 0, -0, bigInt 0n, "", null, undefined, NaN rest all are truthy value.

// How to check input array is empty or not.
let inputPrice = [];
if(inputPrice.length !== 0){
    console.log("inputPrice is not empty");
} else{
    console.log("inputPrice is empty");         // Output:- inputPrice is empty
}

// How to check input object is empty or not.
let inputObj = {};
if(Object.keys(inputObj).length){
    console.log("inputObj is not empty");
} else{
    console.log("inputObj is empty");           // Output:- inputObj is empty
}

/* Nullish Coalescing Operator (??): null undefined 
This will check if value is null/undefined then it will assign the second value.
Actually it is used to check if any api call will give null value then we can assign that to default value.
*/

let val01;

val01 = null ?? 10;                 // Output:- 10
val01 = undefined ?? 20;            // Output:- 20
val01 = undefined ?? 100 ?? 20;     // Output:- 100

console.log(val01);                 // Output:- 10

// Ternary Operator :- Syntax:- condition ? truth statement : false statement
const iceCreamPrice = 100;
(iceCreamPrice < 500) ? console.log("iceCreamPrice is less than 500") : console.log("iceCreamPrice is greater than 500");    // Output:- iceCreamPrice is less than 500
