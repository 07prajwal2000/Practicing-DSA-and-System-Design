function arrayEquals (a, b) {
  if (a.length != b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) return false;
  }
  return true;
}

class Solution {
	/**
	 * @param {string[]} strs
	 * @returns {string}
	 */
	encode(strs) {
		let result = "";
		for (let str of strs) {
			result += str.length + "$" + str;
		}
		return result;
	}

	/**
	 * @param {string} str
	 * @returns {string[]}
	 */
	decode(str) {
		let prev = 0;
		const ans = [];
		for (let i = 0; i < str.length; i++) {
			if (str[i] == "$") {
				const len = parseInt(str.slice(prev, i));
				const s = str.slice(i + 1, i + 1 + len);
				ans.push(s);
				i += len;
				prev = i + 1;
			}
		}
		return ans;
	}
}

// problem URL: https://neetcode.io/problems/string-encode-and-decode

// Input: ["neet","code","love","you"]
// Output:["neet","code","love","you"]

const soln = new Solution();
const input = ["neet","code","love","you"]
const enc = soln.encode(input);
console.log("Encoded: ", enc);
const dec = soln.decode(enc);
console.log("Decoded: ", dec);
console.log("OK: ", arrayEquals(input, dec));