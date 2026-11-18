class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const result = {};

        for(const str of strs) {
            const sortedString = str.split("").sort().join();
            if(!result[sortedString]) {
                result[sortedString] = [];
            }

            result[sortedString].push(str);
        }

        return Object.values(result);
    }
}
