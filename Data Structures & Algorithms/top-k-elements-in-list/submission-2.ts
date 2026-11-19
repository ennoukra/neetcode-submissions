class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = {};
        for(let i = 0; i < nums.length; i++) {
            if(!map[nums[i]]) {
                map[nums[i]] = 1;
            }
            else map[nums[i]] += 1;
        }
        const result = Object.entries<number>(map);

        result.sort((a, b) => b[1] - a[1]);
        let resultReturn = [];
        for(let r of result) {
            if(k === 0) break;
            resultReturn.push(r[0]);
            k--;
        }
        return resultReturn;

    }
}
