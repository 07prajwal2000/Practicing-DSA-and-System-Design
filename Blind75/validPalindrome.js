/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	if (s.length == 1) return true;
	let l = 0,
		r = s.length - 1;
	while (r >= l) {
		while (r > l && !isAscii(s[l])) {
			l++;
			continue;
		}
		while (r > l && !isAscii(s[r])) {
			r--;
			continue;
		}
		if (!Equals(s[r], s[l])) return false;
		r--;
		l++;
	}
	return true;
};

function isAscii(c) {
	const code = c.charCodeAt(0);
	return (
		(code >= 97 && code <= 122) ||
		(code >= 65 && code <= 90) ||
		(code >= 48 && code <= 57)
	);
}

function Equals(a, b) {
	let aCode = a.charCodeAt(0);
	let bCode = b.charCodeAt(0);
	if (aCode >= 97) aCode -= 32;
	if (bCode >= 97) bCode -= 32;
	return aCode == bCode;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false