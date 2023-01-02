const coffess = ['Latte', 'Capuccino', 'Americano'];
const prices = [1.5, 1, 2]
const updatedPrices = prices.map((element, indexPrices) => {
    const prototype_indexPrices = indexPrices
    const price = element * 0.5
    coffess.forEach((name, indexCoffess)=> {
            if(indexCoffess === prototype_indexPrices) {
                alert(`Кофе ${name} сейчас стоит ${price} евро`)
            }
    });
});





