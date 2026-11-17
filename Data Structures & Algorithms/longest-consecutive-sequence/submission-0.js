class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let count = 0;

        for(const num of numSet) {
            if(!numSet.has(num - 1)){
                let length = 0;
                while(numSet.has(num + length)) {
                    length ++;
                }

                count = Math.max(count, length);
            }
        }

        return count;
    }
}
