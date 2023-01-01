const salaruesOfDevelelopers = [400, 500, 600, 2000, 350];

//Добавление элементов
const newSeniorDeveloperSalary = 5000;
salaruesOfDevelelopers.push(newSeniorDeveloperSalary)
console.log(salaruesOfDevelelopers) //[ 400, 500, 600, 2000, 350, 5000 ]
//функиця .push(параметр) добавляет в конец массива новый элемент. 

//Для добавления элемента в начало массива используется функция .unshit(параметр).
salaruesOfDevelelopers.unshift(100)
console.log(salaruesOfDevelelopers) //[100,  400, 500, 600, 2000, 350, 5000 ]

//Так же можно передать еще доп.элементы след. образом =>
salaruesOfDevelelopers.push(345, 234)
salaruesOfDevelelopers.unshift(123, 0,)
console.log(salaruesOfDevelelopers) //[123,   0,  100, 400, 500, 600, 2000, 350, 5000, 345,  234]


//Удаление элементов
salaruesOfDevelelopers.shift();
console.log('shift: ', salaruesOfDevelelopers) //удалился 123
salaruesOfDevelelopers.shift();
console.log('shift: ', salaruesOfDevelelopers)  // удалился и 0


//Если записать данную функцию к переменной, а затем вывести то нам покажется удаленный элемент
const firstRemoveElement = salaruesOfDevelelopers.shift();
console.log(firstRemoveElement) //100 - тот самый удаленный элемент

const lastRemoveElement =  salaruesOfDevelelopers.pop(); //удаляет последний элемент
console.log(lastRemoveElement) //234

//Итог push - добавляет элементы в конец массива
//unshift  - добавляет в начало массива
//shift - убирает элементы в начале массива
//pop - убирает элементы в конце массива

//Изменение элементов массиве
salaruesOfDevelelopers[2] = 6000;
console.log('изменение массива', salaruesOfDevelelopers) //600 поменяли на 6000