class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
       let start = 0;
       let end = numbers.length -1;
       while(start < end) {
        const sum = numbers[start] + numbers[end];

        if(sum > target) end --;
        else if (sum < target) start ++;
        else {
            break;
        }
       }

       return [start + 1, end + 1];
    }
}
