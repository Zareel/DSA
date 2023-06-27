//? You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunatley due to some error one of the number s got duplicated to another number in the set, which result in repitition of one number and loss of another number
//* You are given an integer array nums representing the data status of this set after the error.
//* Find the number that occurs twice and the number that is missing and return them in the form of an array
/*
Example 1:
Input: nums = [1,2,2,4]
Output: [2,3]
*/
let findErrorNums = function (nums) {
  let output = [];
  for (let num of nums) {
    num = Math.abs(num);
    if (nums[num - 1] < 0) {
      output.push(num);
    } else {
      nums[num - 1] *= -1;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      output.push(i + 1);
      return output;
    }
  }
};
