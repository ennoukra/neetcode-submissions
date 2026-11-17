class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let start = 0;
        let end = 0;
        while(start < nums.length ) {
            end = nums.length;
           while(start < end) {
            if(nums[start] === nums[end]) return true;
            end --;
           }
           start ++;
        }

        return false;
    }
}
