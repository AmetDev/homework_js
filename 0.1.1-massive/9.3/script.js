const coffess = ['Latte', 'Capuccino', 'Americano'];
let coffeName =  prompt('Поиск кофе по названию')
const coffeArray = coffess.findIndex((coffe, index)=> {
    if (coffeName === coffe) {
        alert(`Держите ваш любимый ${coffe}. Он ${index + 1}-й популярности в нашей кофейне`)
    } else {
        alert('К сожалению, такого вида кофе нет в наличии');
    }
})
