//mymethods+selection+bubblesort
const arr = [1,2,3,4,5,6,7,8,9]
let count = 0

// function bubbleSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[j] < array[i]) {
//                 let tmp = array[i]
//                 array[i] = array[j]
//                 array[j] = tmp
//             }
//             count+=1
//         }
//     }
//     return array
// }

function BubbleSort(array) {
    for(let i =0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if(array[j+1] > array[j]) {
                let tmp = array[j]
                array[j] = array[j+1]
                array[j+1] = tmp
            }
            count += 1;
        }
    }
    return array

}
console.log('length', arr.length)
console.log(BubbleSort(arr)) // O(n*n)
console.log('count = ', count)
