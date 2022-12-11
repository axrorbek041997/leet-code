class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> a = new HashMap<Integer, Integer>();

        for (int i=0; i<nums.length; i++) {
            int b = target - nums[i];

            if (a.get(b) != null) {
                int[] x = {i, a.get(b)};
                return x;
            }

            a.put(nums[i], i);
        }

        return new int[0];
    }
}