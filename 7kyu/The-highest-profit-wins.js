// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// My Solution:

function minMax(arr){
	let min = Math.min(...arr);
  let max = Math.max(...arr);

  return [min,max]; 
}

// Alt Solutions:

// function minMax(arr){
//   return [Math.min(...arr), Math.max(...arr)];
// }

// const minMax = arr => [ Math.min(...arr), Math.max(...arr) ];

// function minMax(arr){
//   return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];
// }

// function minMax(arr) {
//   var a = arr.sort(function(a,b) {return a-b});
//   return [a[0], a[a.length-1]];
// }