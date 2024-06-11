/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  let minCost = prices[0];
  const n = prices.length;
  for (let i = 1; i < n; i++) {
    minCost = Math.min(minCost, prices[i]);
    if (Math.max(profit, prices[i] - minCost) > profit) {
      profit = Math.max(profit, prices[i] - minCost);
    }
  }
  return profit;
};

console.log(maxProfit([7,1,5,3,6,4])); // 5