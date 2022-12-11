func twoSum(nums []int, target int) []int {
    a := make(map[int]int)

    for i:=0; i<len(nums); i++ {
        b := target - nums[i]
        _, ok := a[b]
        if ok {
            x := []int{i, a[b]};
            return x;
        }

        a[nums[i]] = i;
    }

    return []int{};
}