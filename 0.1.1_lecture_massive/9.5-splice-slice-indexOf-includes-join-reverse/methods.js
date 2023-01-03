//splice - удаляет с того параметра до такого параметра, кот. вы укажите индекс., 3-й паметером производится замена параметра
const cars = ['BMW', 'Mercedes', 'Lada'];
// cars.splice(0, 1)//[ 'Mercedes', 'Lada' ]
cars.splice(0, 2, 'Audi', 'Bugatti') //[ 'Audi', 'Bugatti', 'Mercedes', 'Lada' ]
const  removedElements =  cars.splice(0, 1, 'Audi', 'Bugatti')
// console.log(cars)
console.log('removedElements', removedElements) //показывает удаленный элемент
//так же этот метод изменяет текущий массив

//slice - данный метод создает новый массив (принимает только 2 параметра)
const agesOfDevelopers = [23, 17, 34, 30]
// console.log(agesOfDevelopers.slice(0, 2)); //[ 23, 17 ]
console.log('agesOfDevelopers', agesOfDevelopers)
const slicedAgesOfDevelopers = agesOfDevelopers.slice(0, 2);
console.log('slicedAgesOfDevelopers', slicedAgesOfDevelopers) //новый массив slicedAgesOfDevelopers [ 23, 17 ]
console.log('agesOfDevelopers', agesOfDevelopers) //без изменений 

//indexOf
const favoriteFood = ['Мороженое', 'Торт', 'Coffe'];
const indexofFood =  favoriteFood.indexOf('Торт');
console.log(indexofFood) //1 - его индекс
//если передать не сущ. элемент то выведет '-1', означает, что такого элемента не сущесвует 

//includes - он возвращает true или false, проверяя существует такой элемент в массиве или нет

const techologies = ['JS', 'HTML', 'CSS']
const isTechnoLogiesExists =  techologies.includes('JS')
console.log(isTechnoLogiesExists) //true т.к. такой элемент существует в массиве

//split + join
//split - превращает строку в массив
const listOfOrdes = 'Майка, шорты, кроссовки, рюкзак';
const listOfOrdesArray = listOfOrdes.split(', ');
console.log('listOfOrdesArray', listOfOrdesArray) //listOfOrdesArray [ 'Майка', 'шорты', 'кроссовки', 'рюкзак' ]
//join -превращает массив в строку
const ordersStirng = listOfOrdesArray.join('; ')
console.log(ordersStirng) //Майка; шорты; кроссовки; рюкзак
//P.S желательно в ',_' указ. пробел


//reverse - данный метод переворачивает массив, так же он меняет текущий массив
techologies.reverse()
console.log(techologies) //[ 'CSS', 'HTML', 'JS' ]





