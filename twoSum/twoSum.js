/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let a = {}
    let res = []

    nums.forEach((item, index) => {

        const b = target - item
        if (b in a) {
            res = [index, a[b]]
        }

        a[item] = index
    })

    return res;
};