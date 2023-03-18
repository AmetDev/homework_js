const factorial = (n) => {
    if(n ===1) {
        return 1
    }
    return n * factorial(n-1)
}

count = 0;
const fibonachi  = (n) => {
    if (n ===1 || n === 2) {
        return 1
        count+=1
    }
    count+=1
    return fibonachi(n-1) + fibonachi(n-2)

}
//console.log(fibonachi(6))
console.log(fibonachi(6))
console.log(count)
//3
// 2
// 2 +
