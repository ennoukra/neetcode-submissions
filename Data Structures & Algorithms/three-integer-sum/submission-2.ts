class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]} 
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
        const result:number [][] = [];
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] > 0) break;
            if(i > 0 && nums[i] === nums[i - 1]) continue;

            let start = i + 1;
            let end = nums.length - 1;
            let treeSome = 0;
            while(start < end) {
                treeSome = nums[i] + nums[start] + nums[end];
                if(treeSome > 0) {
                    end --;
                } else if(treeSome < 0) {
                    start ++;
                } else {
                    const res = [nums[i], nums[start], nums[end]];
                    result.push(res);
                    start ++;
                    end --;

                    while( start < end && nums[start] === nums[start - 1]){
                        start ++;
                    }
                }
            }
        }
        return result;
    }
}