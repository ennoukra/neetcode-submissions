class MinStack {
    constructor() {
        this.arr = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.arr.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.arr.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.arr[this.arr.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        const tmp = [];
        let min = this.arr[this.arr.length - 1];
        while(this.arr.length > 0) {
            min = Math.min(min, this.arr[this.arr.length - 1]);
            tmp.push(this.arr.pop());
        }

        while(tmp.length > 0) {
            this.arr.push(tmp.pop());
        }

        return min;
    }
}
