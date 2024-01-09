
// String In JavaScript:- we can defined string in single quotes(' ') or double quotes(" ") as well.
// Some important string method are belows:-


/*
01. charAt():- return string at given index.
    Syntax:- charAt(index).
Note:- If index is out of range it will return empty string. and undefined will treated as 0. and if we will not provide any index in that case it will treated as zero index.
*/

let str01 = "character";
console.log(str01.charAt(0));               // c
console.log(str01.charAt(20));              // empty string
console.log(str01.charAt(-4));              // empty string
console.log(str01.charAt(undefined));       // c
console.log(str01.charAt());                // c

/*
02. concat():- concatenates the string arguments to this string and returns a new string.
    Syntax:- concat(str01, str02,....., strn);
*/
let str02 = "Hello";
let str03 = " Raviranjan";
let result = str02.concat( str03);
console.log(result);                        // Hello Raviranjan; return new string.
console.log(str02);                         // Hello
console.log("".concat({}));                 // [object Object]
console.log("".concat([]));                 // empty string
console.log("".concat(true));               // true
console.log("".concat(null));               // null
console.log("".concat(4, 5));               // 45

/*
03. endsWith()/startsWith():- will return boolean value. whether string endsWith/startsWith of given string or not.
    Syntax:- endsWith(searchString, endPosition:Optional)/ startsWith(searchString, position:Optional)
*/

const str04 = "To be, or not to be, that is the question.";
// endsWith()
console.log(str04.endsWith("question."));               // true
console.log(str04.endsWith("to be"));                   // false
console.log(str04.endsWith("to be", 19));               // true

// startsWith()
console.log(str04.startsWith("To Be"));                 // false
console.log(str04.startsWith("not to be", 10));         // true

/*
04. includes() :- Perform case sensitive search to check whether given string is found within string or not. return boolean value(true & false).
    Syntax:- includes(searchString, position:Optional)  
*/
console.log(str04.includes("To be"));                       // true
console.log(str04.includes("question"));                    // true
console.log(str04.includes("nonexistent"));                 // false
console.log(str04.includes("To be", 1));                    // false
console.log(str04.includes("TO BE"));                       // false
console.log(str04.includes(""));                            // true

/*
05. indexOf() :- search(case-senstive) the string and return the index of first occurance or it will return -1.
    Syntax:- indexOf(searchString, position:Optional)
Note:- if you will give position in negative, or out of range it will consider as zero(default value).
*/
const myString = "brie, pepper jack, cheddar";
const myCapString = "Brie, Pepper Jack, Cheddar";
console.log(myString.indexOf("cheddar"));                   // 19
console.log(myCapString.indexOf("cheddar"));                // -1

/*
06. replace() :-  return a new string with one, small & all the matched of a pattern replace by replacement.
pattern can be string/regex.
    Syntax:- replace("pattern", "replacement")/ replaceAll("pattern", "replacement")
Note:- A string pattern will only be replaced once. if you want to replace all the occurance then use either regex or replaceAll() method.
*/
const paragraph = "I think Ruth's dog is cuter than your dog!";
let result01 = paragraph.replace("dog", "cat");
console.log(result01);
let result02 = paragraph.replaceAll("dog", "cat");
console.log(result02);

/*
07. slice() :- Extract a section of string and return as a new string.
    Syntax:- slice(indexStart, indexEnd:optional)
Note:- IndexEnd will be not included. in slice negative index is allow it will count from the end.
If index start is out of range it will return empty string.
*/
const str05 = 'The quick brown fox jumps over the lazy dog.';

console.log(str05.slice(31));       // "the lazy dog."
console.log(str05.slice(4, 19));      // "quick brown fox"
console.log(str05.slice(-4));         // Expected output: "dog."
console.log(str05.slice(-9, -5));     // Expected output: "lazy"

/*
08. split() :- takes a pattern and divided the string and return in an array.
    Syntax:- split(separator, limit:optional)
*/
const str06 = 'The quick brown fox jumps over the lazy dog.';
const words = str06.split(' ');
console.log(words);                 // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."];
console.log(words[3])               // "Fox"
const chars = str06.split('');
console.log(chars[8]);              // 'K'
const strCopy = str06.split();
console.log(strCopy);               // ["The quick brown fox jumps over the lazy dog."]

/*
09. substring :- Extract a section of string and return as a new string.IndexEnd will be not included
    Syntax:- substring(indexStart, indexEnd)
Difference between slice and substring.
a. if start index is grater than end index. then in case of slice it returns empty string but in case of substring it will swap the index.
b. if any argument is NaN or negative in case of slice it start from the end, but in case of substring it will treat as 0.
*/ 
const str07 = 'Mozilla';
console.log(str07.substring(1, 3));         // "oz"
console.log(str07.substring(2));            // "zilla"
let str08 = "This is GeeksForGeeks";
console.log(str08.slice(13, 0));            // "" (empty string)
console.log(str08.substring(13, 0));        // "This is Geeks"
console.log(str08.slice(-13, 7));           // "" (empty string)
console.log(str08.substring(-13, 7));       // "This is"

/*
10. toLowerCase()/toUpperCase() :- it will convert in to lowerCase/upperCase respectively.
    Syntax:- toLowerCase()/toUpperCase()
*/
const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.toLowerCase());        // "the quick brown fox jumps over the lazy dog.
console.log(sentence.toUpperCase());        // "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

/*
11. trim() :- removes the whitespace from both the ends of the string and return the new string.
    Syntax:- trim()
*/
const greeting = '   Hello world!   ';
console.log(greeting);                      // "   Hello world!   ";
console.log(greeting.trim());               // "Hello world!";
