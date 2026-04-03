class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
      for (let index = nums.length -1; index >=0; index--){
        if(nums[index]===val){
            nums.splice(index,1)
        }
      }
      return nums.length
      
    }
}
