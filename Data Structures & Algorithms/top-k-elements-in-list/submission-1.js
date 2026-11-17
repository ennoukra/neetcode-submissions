class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for(let i = 0; i< nums.length; i++) {
            if(map.has(nums[i])) {
                map.set(nums[i], map.get(nums[i]) + 1)
                continue;
            }

            map.set(nums[i], 1);
        }

        const result = [];
        let count = k;
            while(count) {  
                const key = this.getKeyOfMaxValue(map)
                result.push(key);
                map.delete(key);
                count--;
            }


        return result;
    }

     getKeyOfMaxValue(map) {
        if (!(map instanceof Map) || map.size === 0) return undefined; // safety check

        let maxKey;
        let maxValue = -Infinity;

        for (const [key, value] of map.entries()) {
            if (value > maxValue) {
            maxValue = value;
            maxKey = key;
            }
        }

        return maxKey;
        }

}

