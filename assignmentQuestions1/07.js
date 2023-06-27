//? Given an integer array nums. Move all 0's towards the end of it while maintaining the relative order of the non zero elements
//* Note that you must do this in place without making a copy of the array

/*
Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

let moveZeros = function (nums) {
  let index = 0;
  for (let i = 0; i <= nums.length; i++) {
    const num = nums[i];
    if (num !== 0) {
      nums[index] = num;
      index++;
    }
  }
  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }
};
