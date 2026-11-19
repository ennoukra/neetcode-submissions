class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const result = {};

       for(const str of strs) {
        const charArrayCount = new Array(26).fill(0);
        for(const char of str) {
            charArrayCount[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }
        const charCount = charArrayCount.join(',');
        if(!result[charCount]) {
            result[charCount] = [];
        }

        result[charCount].push(str);
       }

        return Object.values(result);
    }
}
