/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let maxCount = 0;
  const set = new Set(nums);
  for (let i of set) {
    let count = 1;
    if (!set.has(i - 1)) {
      while (set.has(i + count)) {
        count++;
      }
    }
    maxCount = Math.max(maxCount, count);
  }
  return maxCount;
};