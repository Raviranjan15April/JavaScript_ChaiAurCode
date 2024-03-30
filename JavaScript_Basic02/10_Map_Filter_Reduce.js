/*
Filter Method:- will return the new array basic of some condition.
*/

let arr = [1, 2, 3, 4, 5, 6, 7];
let result = arr.filter( (num) => num > 4)
console.log(result);                    // Output:- [ 5, 6, 7 ]

// we can acheive the filter thing using the forEach loop
let newArray = [];
arr.forEach((num)=>{
    if(num > 4){
        newArray.push(num);
    }
})
console.log(newArray);                  // Output:- [ 5, 6, 7 ]

let bookDetails = [
    { title: "book01", genre : "history", publish : 1992, edition: 2016},
    { title: "book02", genre : "fiction", publish : 1998, edition: 2019},
    { title: "book03", genre : "non-fiction", publish : 1990, edition: 2014},
    { title: "book04", genre : "Science", publish : 1993, edition: 2007},
    { title: "book05", genre : "history", publish : 1991, edition: 2010},
    { title: "book06", genre : "fiction", publish : 1999, edition: 2007},
    { title: "book07", genre : "non-fiction", publish : 1997, edition: 2012},
    { title: "book08", genre : "Science", publish : 1992, edition: 2014},
    { title: "book09", genre : "history", publish : 1995, edition: 2016}
];

// give me the list of the book that was published after 1998
const filteredBook = bookDetails.filter((book)=> book.publish >= 1998);
console.log(filteredBook);

/* 
Map:- this will also return the new array after mapping with some value.
*/

let myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let newNumber = myNumber.map((num)=> num + 10);
console.log(newNumber);             // Output:- [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// Note:- using the map method we can chain the method of array.

let result01 = myNumber.map((num) => num * 5).filter((num)=> num%2 === 0);
console.log(result01);              // Output:- [ 10, 20, 30, 40, 50 ]

/* 
Reduce:- it will return the accumulator vale of array.
*/

let arr01 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let reducedValue =  arr01.reduce((acc, curr)=>{
    return acc + curr;
}, 0);
console.log(reducedValue);              // Output:- 55

let courceDetails = [
    {
        cource: "javaScript",
        price: 199
    },
    {
        cource: "java",
        price: 99
    },
    {
        cource: "python",
        price: 199
    },
    {
        cource: "Data Science",
        price: 99
    },
]
let finalPrice = courceDetails.reduce((acc, cource)=> acc + cource.price, 0);
console.log(finalPrice);                // Output:- 596