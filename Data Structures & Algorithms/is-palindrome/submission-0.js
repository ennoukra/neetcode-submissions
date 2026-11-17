class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let start = 0;
        let end = s.length - 1;
        const news = s.toLowerCase()
        while(start < end) {
            if(!this.isAlphanumeric(news[start])){
                 start++;
                 continue;
            }
            if(!this.isAlphanumeric(news[end])){
             end --;
             continue;
            }
            if(news[start] != news[end]) return false;
            start ++;
            end --
        }

        return true;
    }

    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }
}


