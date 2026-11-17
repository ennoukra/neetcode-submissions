class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map = new Map<number, number>();

        for(const num of nums){
            if(map.has(num)) return true;
            map.set(num, 1); 
        }

        return false;
    }
}
