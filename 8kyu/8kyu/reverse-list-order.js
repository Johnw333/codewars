// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// My Solution

function findAverage(numbers) {
  if (numbers.length === 0) {
    return 0
  }
  
const sum = numbers.reduce((acc, num) => acc + num, 0)
const average = sum / numbers.length

return average
}