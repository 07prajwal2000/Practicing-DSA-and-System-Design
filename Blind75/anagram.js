/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length != t.length) return false;
  const map = { };
  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) map[s[i]]++;
    else map[s[i]] = 1;
  }
  for (let i = 0; i < t.length; i++) {
    t[i] in map && map[t[i]]--;
  }
  for (k in map) {
    if (map[k] != 0) return false;
  }
  return true;
};