// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// My Solution:

function points(games) {
  let totalPoints = 0;
  for (let i = 0; i < games.length; i++) {
    const [x, y] = games[i].split(":").map(Number);
    if (x > y) {
      totalPoints += 3;
    } else if (x === y) {
      totalPoints += 1;
    }
  }
  return totalPoints;
}

// Alt Solutions:

// const points=games=>games.reduce((output,current)=>{
//   return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
// },0)

// // function points(games) {
// //   return games.reduce((output,current)=>{
// //     let x = parseInt(current[0]);
// //     let y = parseInt(current[2]);
// //     let value= x>y ? 3 : x===y ? 1 : 0;
// //     return output+value;
// //   },0)
// // }

// function points(games) {
//   let total = 0;
//   games.map(game => {
//     if (game[0] === game[2]) {
//       total += 1;
//     } else if (game[0] > game[2]) {
//       total += 3;
//     }
//   });
//   return total;
// }

// function points(games) {
//   var sum=0;
//   for (var i=0; i<games.length; ++i)
//   {
//     if (games[i][0]>games[i][2])
//       sum+=3;
//     if (games[i][0]==games[i][2])
//       sum+=1;
//   }
//   return sum;
// }