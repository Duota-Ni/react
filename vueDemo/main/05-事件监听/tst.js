/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let a = nums[i];
        let b = nums[i + 1];
        if (a === b) {
            return a;
        } else {
            a = b;
            i++;
            b = nums[i];
        }

    }
};
let number = [2, 3, 1, 0, 2, 5, 3];
let result = findRepeatNumber(nums);
console.log(result);