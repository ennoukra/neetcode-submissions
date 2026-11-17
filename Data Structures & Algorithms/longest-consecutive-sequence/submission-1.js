class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
      const set = new Set(nums);
      let count = 0;
      let longestSequence = 0;

      for(let i = 0; i < nums.length; i ++) {
        if(set.has(nums[i] - 1)) {
            continue;
        }
        count = 1;
        while(set.has(nums[i] + count)) {
            count ++;
        }

        longestSequence = Math.max(longestSequence, count);
      }

      return longestSequence;
    }

}
