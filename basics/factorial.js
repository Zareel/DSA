//TODO Problem statement
//? Give an integer 'n'. Find the factorial of that integer

//* In mathematics the factorial of a non negative integer 'n' denote n! is the product of all positive integers less than or equel to 'n'
//* Factorial of zero is 1
//* Factorial(4) = 4*3*2*1 = 24
//* Factorial(5) = 5*4*3*2*1 = 120

function factorial(n) {
  //if n is greater than 1 we need to find the product of all the numbers less than or equel to n
  let fac = 1;
  for (let i = 2; i <= n; i++) {
    fac = fac * i;
  }
  return fac;
}

console.log(factorial(4));

//Big O = O(n)
//Big O is linear type complexity
