// You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

// For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

// The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

// My Solution:

function validateWord(s)
{
  s = s.toLowerCase();
  
  const charCount = {};
  
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  const counts = Object.values(charCount);
  
  return counts.every(count => count === counts[0]);
}

// Alt Solutions:

// function validateWord(s, c = s.toLowerCase())
// {
// 	return c.length % new Set(c).size == 0
// }

// function validateWord(s) {
//   var freq = {}
//   s.toLowerCase().split('').forEach(function(s) {
//     freq[s] ? freq[s]++ : freq[s] = 1
//   })

//   return new Set(Object.values(freq)).size == 1
// }

// const validateWord = $ => {
//   $ = [...$.toLowerCase()].reduce((acc, el)=>{
//     acc[el] = acc[el] + 1 || 1;
//     return acc
//   }, {})
//  return [...new Set(Object.values($))].length === 1
// }