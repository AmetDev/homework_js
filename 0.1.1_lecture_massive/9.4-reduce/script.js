const salariesOfDevelelopers = [400, 500, 600, 2000, 350];
//map - возращает новый массив(записав переменную) измененые в callback func.
const updateSalaries = salariesOfDevelelopers.map((name, index, array) => {
    return name ** 2;
});
console.log('updateSalaries', updateSalaries) //updateSalaries [ 160000, 250000, 360000, 4000000, 122500 ]

//filter - Своим результатом метод возвращает новый массив, в который войдут только те элементы, для которых переданная функции вернет true.
const filterSalariesDevelopera = salariesOfDevelelopers.filter((salary, index, array)=> {
    return index % 2 === 0;
})
console.log(filterSalariesDevelopera) //400, 600, 350

//find - Метод возвращает первый элемент предоставленного массива,
//который удовлетворяет предоставленной функции тестирования. 
//Если никакие значения не удовлетворяют функции тестирования, undefined возвращается.
//Так же создает новый массив, т.е. его нужно записать в новую const
const salaries1 = salariesOfDevelelopers.find((salary) => {
    return salary === 600;
})
console.log(salaries1) //600
//так же с find используется findIndex 
//findIndex - работает по такому же принципу, как и find, но возращает не сам элемент,а его индекс
const searchIndex = salariesOfDevelelopers.findIndex((salary)=> {
    return salary === 600;
})
console.log(searchIndex) //2 - это индекс 600


//some, every
//some - работает по такому же принципу как и верхние методы
//если хотяб одно значение будет true, то элемент данный будет true,
//а если все элементы false, то весь элемент false
const elementsExists = salariesOfDevelelopers.some((salary)=> {
    return salary > 3000;
})
console.log('some:', elementsExists)//false

//every - возращает элемент если все true, то тогда элемент будет true
//если хотяб один будет false, значит весь элемент false
const allElementsExists = salariesOfDevelelopers.every((salary)=> {
    return salary > 3000;
})
console.log('every:', allElementsExists) //false

//Итог map, filter, find, findIndex, some, every

//reduce
salariesOfDevelelopers.reduce((acc, element, index, array)=>{
    console.log('acc/salary', acc, element)
    return acc + element;
}, 0);