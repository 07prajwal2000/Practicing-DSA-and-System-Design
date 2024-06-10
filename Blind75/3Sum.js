/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	nums = nums.sort((a, b) => a - b);
	const ans = [];

	for (let i = 0; i < nums.length; i++) {
		let l = i + 1,
			r = nums.length - 1;
		if (i > 0 && nums[i - 1] === nums[i]) continue;

		while (l < r) {
			const curSum = nums[i] + nums[l] + nums[r];
			if (curSum > 0) {
				r--;
			} else if (curSum < 0) {
				l++;
			} else {
				ans.push([nums[i], nums[l], nums[r]]);
				l++;
				r--;
				while (nums[l] === nums[l - 1] && l < r) {
					l++;
				}
			}
		}
	}
	return ans;
};
