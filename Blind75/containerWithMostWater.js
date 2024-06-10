/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let l = 0, r = height.length - 1;
  let area = 0;
  while (l < r) {
    let tempheight = Math.min(height[l], height[r]);
    let tempWidth = r - l;
    area = Math.max(tempheight * tempWidth, area);
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return area;
};