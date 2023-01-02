
const clientsEstimations = [];
function askClientToGiveEstimation() {
    const resultEstimation = prompt("Как вы оцениваете нашу кофейню от 1 до 10?")
    clientsEstimations.push(resultEstimation) 
    console.log(clientsEstimations)
}

askClientToGiveEstimation();
const new1 =  clientsEstimations.filter((goodEstimations)=>{
    if (goodEstimations > 5) {
        alert(`Всего положительных оценок: goodEstimations: ${goodEstimations}; Всего отрицательных оценок: notGoodEstimations: ${0}`)
    } else if (goodEstimations <= 5) {
        const notGoodEstimations = goodEstimations;
        alert(`Всего положительных оценок: goodEstimations: ${0}; Всего отрицательных оценок: notGoodEstimations: ${notGoodEstimations}`)
    }
    
})






