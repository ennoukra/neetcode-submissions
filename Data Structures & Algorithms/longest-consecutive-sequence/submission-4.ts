class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if(nums.length === 0 ) return 0;
        let result = [];
        const map = new Map<number, boolean>();
        const set = new Set(nums);
        for(let num of nums) {
         if(set.has(num -1)) continue;
        
        let i = num;
        let size = 0;
         while(set.has(i)) {
            size ++;
            i++;
         }
         result.push(size);
        }

        console.log(result);

        return Math.max(...result);
    }
    
}
