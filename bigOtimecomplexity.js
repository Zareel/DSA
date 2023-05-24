//? find the sum of n natural numbers
/*
example
summation(4) = 10
1+2+3+4 = 10
*/
//* time complexity count
// lets calculate the number of times each statemant is executed.
//Total count is 4+2 ie n+2 where n is the input to the function
//if n=10, total count is 10+2

function summation(n) {
  let sum = 0; // executes only once
  for (let i = 1; i <= n; i++) {
    sum += i; // executes 4 times
  }
  return sum; //executes just once
}
console.log(summation(4));
