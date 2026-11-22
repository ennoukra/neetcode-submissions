class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {

        const isAlphanumeric = (char) => /^[a-z0-9]$/i.test(char);

        s = s.toLowerCase();
        console.log(s);
       let start = 0;
       let end = s.length - 1;

       while(start < end) {
        if(!isAlphanumeric(s[start])) {
            start ++;
            continue;
        }
        if(!isAlphanumeric(s[end])) {
            end --;
            continue;
        }
        if(s[start] !== s[end]) return false;
        start ++;
        end --;
       }

       return true;
    }
}
