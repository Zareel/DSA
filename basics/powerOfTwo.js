// Power of two

// Problem statement
//? Give a positive integer `n` determine if the number is a power of 2 or not
//* An inter is a power of two if there exist an integer x such that 'n' === 2^x

// isPowerOfTwo(1) = true(2^0)
// isPowerOfTwo(2) = true(2^1)
// isPowerOfTwo() = false

/*
n = 8
8/2 = 4 remainder is 0
4/2 = 2 remainder is 0
2/2 = 1 remainder is 0

if remainder is not zero in any of the steps then n is not power of 2
if remainer is zero and 'n' comes down to 1 eventually, n is a power of 2 
*/

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    // the loop should run as long as n is greater than 1
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}
console.log(isPowerOfTwo(5));


// Big O => O(long)

function isPowerOfTwoBitWise(n){
    if(n<1){
        return false
    }
    return
}