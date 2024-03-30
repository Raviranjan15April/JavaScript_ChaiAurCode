/*
Difference between while & do while loop:-
In do while loop at-least it will executes one iteration doesn't matter condition met or not.
*/

// While Loop
let score = 1;
while(score < 10){
    console.log(`My score is ${score}`);
    score = score+2;
}

let arr = ["John", "Smith", "peter", "Devid"];
let iterable = 0
while(iterable < arr.length){
    console.log(`Element of the array is ${arr[iterable]}`);
    iterable++;
}

// do-While Loop
let number = 1
do{
    console.log(`Number is ${number}`)
    number++;
} while(number < 6)