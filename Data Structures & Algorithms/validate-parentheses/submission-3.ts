class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];
        for(let c of s) {
            if(c === "(") stack.push("(");
            else if(c === "{") stack.push("{");
            else if(c === "[") stack.push("[");

            else if(c === ")" && 
                stack.length !== 0 && 
                stack[stack.length-1] === "(")
                stack.pop();
            else if(c === "}" &&
                stack.length !== 0 &&
                stack[stack.length-1] === "{")
                stack.pop();
              else if(c === "]"
                && stack.length !== 0
                && stack[stack.length-1] === "[")
                stack.pop();
            else stack.push(c);
        }
         
        console.log(stack);
        return stack.length === 0;
    }
}
