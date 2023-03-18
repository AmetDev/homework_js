const array = [3,0,2,7,6];
// 1) [0,3,2,7,6]
// 2) [0,2,3,7,6]
// 3) [0,2,3,7,6]
// 4) [0,2,3,6,7]

function selectionSort(nums) {
    // for (let i =0; i < array.length; i++) {
    //     let indexMin = i;
    //     for (let j = i+1; j < array.length; j++) {
    //         if(array[j] < array[indexMin]) {
    //             indexMin = j;
    //         }
    //     };
    //     let tmp = array[i]
    //     array[i] = array[indexMin]
    //     array[indexMin] = tmp
    //
    // };
    // return array

    for (let i = 0; i < nums.length; i++) {
        let indexMin = i;
        for(let j = i+1; j < nums.length; j++) {
            if (nums[j] < nums[indexMin]) {
                indexMin = j
            }
        }
        let tmp = nums[i]
        nums[i] = nums[indexMin]
        nums[indexMin] = tmp
        }
    return nums;
}

console.log(selectionSort([2,10,20]))
