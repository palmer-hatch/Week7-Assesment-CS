
//1
// let zero = [0, 1, 2, -1, 4, 5];
// let boolVal = false
// for(let i = 0; i < zero.length; i++){
//   for(let x = i + 1; x < zero.length ; x++){
//     if(zero[i] + zero[x] === 0){
//       boolVal = true;
//     }
//   }
// }
// console.log(boolVal);





//2
// let word = 'Monday';
// let wordArray = word.split('');

// let isUnique = true;

// for (let i = 0; i < wordArray.length; i++){
//   for (let j = 0; j < wordArray.length; j++){
//     if (i === j){
//       continue;
//     }
//     if (wordArray[i] === wordArray[j]){
//       isUnique = false;
//       break;
//     }
//   }
// }

// console.log(wordArray);
// console.log(isUnique);


//3
// function isPangram(string){
//     const letters = string.toLowerCase().match(/[a-z]/g);
//     const alphabet = [...new Set(letters)]
//     return alphabet.length === 26;
// }

// console.log(isPangram('The quick brown fox jumps over the lazy dog'))




//4let name1 = "chet"
// let name2 = 'larryshea'


// function arrLen(nam1,nam2){
// let arr1 = nam1.split('')
// let arr2 = nam2.split('')

// console.log(arr1)
// console.log(arr2)

// if(arr1.length> arr2.length){
//   console.log(arr1.length)
// }else{
//   console.log(arr2.length)
// }
// }

// arrLen(name1,name2)