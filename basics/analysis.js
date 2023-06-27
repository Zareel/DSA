//create an array
let arr = [1, 2, 3, 4, 5];
//create variable for the sum and initialze it
let total = 0;
//iterate over each items in the array
for (let i = 0; i < arr.length; i++) {
  total += arr[i];
}
console.log(total);
//==========================================================================

//? using formula

let n = arr.length;
sum = (n * (n + 1)) / 2;
console.log(sum);
