//?Given an integer array nums, return true if any value appears atleast twice in the array and return false if every element is distinct

/*
**Example 1:**
Input: nums = [1,2,3,1]

Output: true
*/
function containsDuplicate(nums) {
  let memory = [];
  for (let i = 0; i < nums.length; i++) {
    if (memory.includes(nums[i])) {
      return true;
    } else {
      memory.push(nums[i]);
    }
  }
  return false;
}
