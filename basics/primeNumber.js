//TODO Problem statement
//? Give a natual number 'n'. Determine if the number is prime of not

//* A prime number is a natural number greater than 1, that is not a product of two smaller natural numbers

// isPrime(5) = true
// isPrime(4) = false (2*2)

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  //however the loop has completed and no number could devide n and it is prime then return true
  return true;
}
console.log(isPrime(10));

//* Big O = O(n) => linear type complexity

//======================================================================

//Optimized primary test

//Integers larger than the square root do not need to be checked because whenever `n = a*b`, one of the two factors `a` and `b` is less than or equal to the square root of `n`

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  //however the loop has completed and no number could devide n and it is prime then return true
  return true;
}
console.log(isPrime(10));

//* Big O = O(sqrt(n))
