/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	const set = new Set();
	let l = 0;
	let count = 0;
	const n = s.length;
	for (let r = 0; r < n; r++) {
		while (set.has(s[r])) {
			set.delete(s[l]);
			l++;
		}
		set.add(s[r]);
		count = Math.max(count, r - l + 1);
	}
	return count;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3