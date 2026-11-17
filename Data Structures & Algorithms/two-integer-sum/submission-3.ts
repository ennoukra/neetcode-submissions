class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
       let array = [];
       for(let i = 0; i < nums.length; i++) {
        array.push([nums[i], i]);
       }

       array.sort((a, b) => a[0] - b[0]);

       let i = 0, j = nums.length - 1;
       let resultArray = [];
       while(i < j) {
            const sum = array[i][0] + array[j][0];
            if( sum === target) {
                return [ Math.min(array[i][1], array[j][1]), Math.max(array[i][1], array[j][1])]
            }
            else if(sum < target) i ++;
            else j --;
       }
    }
}