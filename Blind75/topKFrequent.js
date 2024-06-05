/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const ans = [];
  const temp = Array(nums.length);
  const map = { };

  for (let i = 0; i < nums.length; i++) {
    const t = nums[i];
    if (t in map) map[t]++;
    else map[t] = 1;
  }

  for (let k in map) {
    if (temp[map[k]]) {
      temp[map[k]].push(k);
    } else {
      temp[map[k]] = [k];
    }
  }

  for (let i = temp.length - 1; i >= 0 && k > 0; i--) {
    if (!temp[i]) continue;

    while (k && temp[i].length) {
      ans.push(temp[i].pop());
      k--;
    }
    
  }

  return ans;
};


console.log(topKFrequent([1,1,1,2,2,3], 2));