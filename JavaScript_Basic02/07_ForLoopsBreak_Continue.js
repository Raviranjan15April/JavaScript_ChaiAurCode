/*
For Loop :- 
*/

// example of for loop
for(let index = 1; index <= 10; index++){
    const element = index;
    // console.log(`Element is ${element}`);       // Output:- it will print from 1 to 10
}

// Adding condition in loop
for(let i = 1; i <= 10; i++){
    const element = i;
    if(element === 5){
        // console.log(`Favorite Number is ${5}`);     // this line will also print as it is matching the condition
    }
    // console.log(`Element is ${element}`);           // this line will print for every value.
}

// adding nested loop
for(let i = 1; i <= 10; i++){
    // console.log(`outer loop ${i}`);
    for(let j = 1; j <= 10; j++ ){
        // console.log(`outer loop value ${i} inner loop value ${j}`)
    }
}

// Break & Continue keyword
// Break keyword:- once the condition will match then we will break the loop
for(let i = 1; i <=10; i++){
    if(i === 5){
        console.log(`my favorite number is ${i}`)
        break;                              // here we are breaking the loop once our condition will match
    }
    console.log(`element is ${i}`);
}

// continue keyword:- once the condition will match this iteration will not continue it will got the next iteration. remember it will not brea the loop.