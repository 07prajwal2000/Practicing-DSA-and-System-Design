/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  if (strs.length == 1) return [[ strs[0] ]];
  const map = { };
  for (let i = 0; i < strs.length; i++) {
    const arr = Array(26);
    const ele = strs[i];

    for (let c of ele) {
      const idx = c.charCodeAt(0) - 97;
      arr[idx] = arr[idx] ? arr[idx] + 1 : 1;
    }
    if (map[arr]) {
      map[arr].push(ele);
    } else {
      map[arr] = [ele];
    }
  }
  return Object.values(map);
};

groupAnagrams(["eat","tea","tan","ate","nat","bat"]); // [["eat","tea","ate"],["tan","nat"],["bat"]]