class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let runningMax = -1;
        for(let index = arr.length-1; index >= 0; index--){
            let current = arr[index];
            arr[index] = runningMax;
            if (current > runningMax){
                runningMax = current;
             }
        }
        return arr;
    }
}
