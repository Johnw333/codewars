// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// MY Solution:

function solution(string) {
  return string.replace(/[A-Z]/g, ' $&');
}

// Alt Solutions:

// function solution(string) {
//   return(string.replace(/([A-Z])/g, ' $1'));

// }

// function solution(string) {
//   string = string.split('').map(function (el) {
//     if (el === el.toUpperCase()) {
//       el = ' ' + el
//     }
//     return el
//   })
//   return string.join('')
// }

// function solution(string) {
//   return string.replace(/([a-z])([A-Z])/g, "$1 $2");
// }

// const solution = string => string.replace(/[A-Z]/g, ' $&');