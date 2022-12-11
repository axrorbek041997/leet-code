class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        a = {}
        for i, n in enumerate(nums):
            b = target - n
            if b in a:
                return [i, a[b]]
            a[n] = i
