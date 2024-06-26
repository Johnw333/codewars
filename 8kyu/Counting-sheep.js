// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

My Solution:

function countSheeps(arrayOfSheep) {
  let count = 0;

  for(let i = 0; i < arrayOfSheep.length; i++){
    if(arrayOfSheep[i] === true){
      count++;
      }
    }

    return count;
  }

//   Alt Solutions:

// function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
//   }

//   function countSheeps(arrayOfSheep) {
//     // TODO May the force be with you
//     var num = 0;
    
//     for(var i = 0; i < arrayOfSheep.length; i++)
//       if(arrayOfSheep[i] == true)
//         num++;
        
//     return num;
//   }

//   function countSheeps(arr) {
//     return arr.filter(Boolean).length;
//   }
