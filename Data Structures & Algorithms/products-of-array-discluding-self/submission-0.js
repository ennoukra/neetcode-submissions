class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        let multp = 1;
        let suffix = new Array(n);
        let prefix = new Array(n);
        let result = new Array(n);
        suffix[0] = 1;
        prefix[n - 1] = 1;

        for(let i = 1; i < nums.length; i++) {
            suffix[i] = suffix[i - 1] * nums[i - 1]
        }
        for (let i = n - 2; i >=0; i--) {
            prefix[i] = prefix[ i + 1] * nums[i +  1];
        }

        for(let i = 0; i < n; i++) {
            result[i] = suffix[i] * prefix[i];
        }

        return result;
    }
}
