//?You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left to right order. The large integer does not contain any leading 0s. Increment the large integer by one and return the ruslting arrya of digits

/*
**Example 1:**
Input: digits = [1,2,3]
Output: [1,2,4]

**Explanation:** The array represents the integer 123.

Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

*/

let plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (++digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }
  return [1, ...digits];
};
