const array = []
function getSumOfSequence(number) {
    for(i= 1; i <= number; i++) {
        array.push(i) 
    }
    number = array.pop() + array.shift()
    console.log('result', number)
    return number;
   
}
getSumOfSequence(5)
