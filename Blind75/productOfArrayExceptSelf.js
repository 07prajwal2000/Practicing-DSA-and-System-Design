/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let product = 1;
  const ans = Array(nums.length);
  let zeros = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      zeros++;
      continue;
    }
    product *= nums[i];
  }
  if (zeros > 1) {
    ans.fill(0);
    return ans;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      ans[i] = product;
    } else if (zeros == 1) {
      ans[i] = 0;
    } else {
      ans[i] = product / nums[i];
    }
  }

  return ans;
};