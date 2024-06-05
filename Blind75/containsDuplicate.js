/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
      let n = nums[i];
      if (set.has(n)) return true;
      set.add(n);
  }
  return false;
};