class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        let stack = [];
        let result = [];
        let i;
        for( i = 0; i < n - 1; i++) {
            for(let j = i + 1; j < n; j++) {
                if(temperatures[i] >= temperatures[j]) {
                    stack.push(temperatures[j]);
                } else {
                    stack.push(temperatures[j]);
                    break;
                }
            }

           if(stack.length !== 0 && 
              temperatures[i] >= stack[stack.length - 1]) 
            {
                result[i] = 0;
            } else {
            result[i] = stack.length;
           }

           stack = [];
        }

        result.push(0);
        return result;
    }
}
