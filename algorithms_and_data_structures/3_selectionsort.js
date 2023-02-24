const array = [3,0,2,7,6];
// 1) [0,3,2,7,6]
// 2) [0,2,3,7,6]
// 3) [0,2,3,7,6]
// 4) [0,2,3,6,7]
let count = 0;

function selectionSort(array) {
    for (let i =0; i < array.length; i++) {
        let indexMin = i;
        for (let j = i+1; j < array.length; j++) {
            if(array[j] < array[indexMin]) {
            //1) 0 < 3 //true
            //2) 2 < 3 // true
            //3) 7 < 3 //false
            //4) 6 < 7 //true
                indexMin = j;
            }
            count += 1;
        };
        let tmp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = tmp
        console.log(`${i}=${array[i]}`)
    }
    return array
}

console.log(selectionSort(array))
console.log(count)