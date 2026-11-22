class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {

        let start = 0;
        let end = numbers.length - 1;

        while(start < end) {
            const result  = numbers[start] + numbers[end];
            if(result === target) {
                return [start + 1, end + 1];
            }

            else if(result < target) start ++;
            else end --;
        }
    }
}
