/*
Note:- In javascript we don't have seperate thing for decimal like others language. we have number only.
we can convert anythings in to number by using "Number(value)"
Number has following some inportant property.
MAX_SAFE_INTEGER :- Maximum safe integer in javascript.
MAX_VALUE :- Maximum numeric value repersentable in javascript.
MIN_SAFE_INTEGER :- Minimum safe integer in javascript.
MIN_VALUE :- Manimum numeric value repersentable in javascript.
parseFloat :- passes the string argunment and return floating point number.
parseInt :- passes the string argunment and return floating point number.
toFixed :- gives number using floating notation.
*/
console.log(Number("123"));                 // 123
console.log(Number(true));                  // 1
console.log(Number(false));                 // 0
console.log(Number(null));                  // 0
console.log(Number(undefined));             // NaN
console.log(Number.MAX_SAFE_INTEGER);       // 9007199254740991
console.log(Number.MAX_VALUE);              // 1.7976931348623157e+308    
console.log(Number.MIN_SAFE_INTEGER);       // -9007199254740991
console.log(Number.MIN_VALUE);              // 5E-324
console.log(parseFloat('123.45'));          // 123.45
console.log(parseFloat('123.45abc'));       // 123.45
console.log(parseInt('123.45'));            // 123
console.log(parseInt('123.45abc'));         // 123
console.log(parseFloat('123.45abc').toFixed(3));    // 123.450