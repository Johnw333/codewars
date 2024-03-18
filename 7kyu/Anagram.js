// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

var isAnagram = function(test, original) {
  test = test.replace(/[^\w]/g, '').toLowerCase();
  original = original.replace(/[^\w]/g, '').toLowerCase();
  
  var sortedTest = test.split('').sort().join('');
  var sortedOriginal = original.split('').sort().join('');
  
  return sortedTest === sortedOriginal; 
};

// Alt Solutions:

// var isAnagram = function(test, original) {
//   var t = test.toLowerCase().split('').sort().join('');
//   var o = original.toLowerCase().split('').sort().join('');
//   return (t==o)?true:false;
// };

// function isAnagram (test, original) {
// 	return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
// }

// String.prototype.sortLetters = function() {
//   return this.toLowerCase().split('').sort().join('');
// }

// var isAnagram = function(test, original) {
//   return test.sortLetters() == original.sortLetters();
// };