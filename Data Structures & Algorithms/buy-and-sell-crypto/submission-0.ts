class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        const profits = [];

        for(let i = 1; i < prices.length; i++){
            let profit = 0;
            let j = 0;
            while(j < i) {
                if(profit < prices[i] - prices[j]){
                    profit = prices[i] - prices[j];
                }
                j++;
            }
            profits.push(profit);

        }
        let result = 0;
        for(const profit of profits) {
            if(profit > result){
                result = profit;
            }
        }
        return result;
    }
}
