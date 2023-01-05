const goals = [8, 1, 1, 3, 2, 1, 5];
let main = 0;
let newArr;
let newIndex;
for (i = 0; i < goals.length; i++) {
    while(main < goals[i]) {
        main++
        newArr = main
        newIndex = i
    }
}

let minarr;
let minIndex;
for (i = 0; i < goals.length; i++) {
    while(main > goals[i]) {
        main--
        minarr = main
        minIndex = i
    }
}
//alert(`Самый результативный матч был под номером ${newIndex+1}. В ем было забито ${newArr}.`)

console.log('max-number', newArr)
console.log('max-index', newIndex)
console.log('min-number', minarr)
console.log('min-index', minIndex)






