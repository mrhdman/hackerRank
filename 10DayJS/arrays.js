function getSecondLargest(nums) {
    var largest = 0;
    var second = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > largest){
            largest = nums[i];
        }
    }
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > second && nums[i] < largest){
            second = nums[i];
        }
    }
    return second;
}

false == 0;
