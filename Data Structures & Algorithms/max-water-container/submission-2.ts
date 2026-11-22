class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let start = 0;
        let end = heights.length - 1;
        let result = 0;
        while(start < end) {
            const min = Math.min(heights[start], heights[end]);
            if(result < min*(end - start)) result = min*(end - start);
            
            if(heights[start] < heights[end]) start ++;
            else end --;
        }

        return result;
    }
}
