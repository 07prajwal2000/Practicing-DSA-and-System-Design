/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const obj = {}

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if(diff in obj)
    {
      return [i, obj[diff]];
    }
    obj[nums[i]] = i;
  }
};