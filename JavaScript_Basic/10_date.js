/*
Date() :- Date createds date object. and repersents string repersentation of current date. Date object repersents in miliseconds since the mid night of begining "1st jan 1970".
Note:- months are zero based index. typeof date will be object.
syntax:- new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
Have some method from date to get result like.
getDate() :- to get date.
getDay() :-  to get day. based on zero index. start from sunday.
getFullYear() :- to get year.
getMonth() :- to get months. based on zero index.
getMilliseconds() :- to get milisecond.
*/
const newDate = new Date();
console.log(typeof newDate);                    // object
console.log(newDate);                           // 2024-01-14T02:41:44.647Z
console.log(newDate.toString());                // Sun Jan 14 2024 02:41:44 GMT+0000 (Coordinated Universal Time)
console.log(newDate.toDateString());            // Sun Jan 14 2024
console.log(newDate.toLocaleString());          // 1/14/2024, 2:43:06 AM

// we can give format for creating date.
console.log(new Date('1995-04-15').toLocaleString());       // 4/15/1995, 12:00:00 AM; "YYYY-MM-DD" format.
console.log(new Date('04-15-1995').toDateString());         // Sat Apr 15 1995;   "MM-DD-YYYY" format.

// to get the correct timestamp
let timestamp = Date.now();
console.log(timestamp);                         // 1705200878619
// convert in to milisecond.
console.log(Math.floor(timestamp/1000));        // 1705200927

console.log("================================= start ===========");
console.log(new Date().getDate());              // 14
console.log(new Date().getDay());               // 0
console.log(new Date().getFullYear());          // 2024
console.log(new Date().getMonth());             // 0
console.log(new Date().getMilliseconds());      // 994
