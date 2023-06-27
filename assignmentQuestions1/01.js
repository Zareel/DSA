//? Given an array of integers nums and an iteger target, return indices of the two numbers such that they add up to target
//* You may assume that each input would have exactly one solution, and you may not use the same element twice
//* You can return the answer in any order
/*
**Example:**
Input: nums = [2,7,11,15], target = 9
Output0 [0,1]

**Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1][

*/

let twoSum = function (numbers, target) {
  let map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    let number1 = numbers[i];
    let number2 = target - number1;
    if (map.has(number2)) {
      return [i, map.get(num2)];
    }
    map.set(number1, i);
  }
};
