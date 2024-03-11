// Reverse words

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
  const words = str.split(' ');

  const reverseWords = words.map(word => {
    return word.split('').reverse().join('');
  });
  return reverseWords.join(' ');
}