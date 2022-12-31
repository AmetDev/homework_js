//ООП-Объектно оринтировачное программирование
//function и class
//===FUNCTION===
function Animal(name) {
    this.name = name;

    this.getName = function() {
        return this.name;
    }
}
// //Animal
const cat = new Animal('Tiger');
console.log('cat', cat.name)
console.log('getName:', cat.getName())
//С помощью ключевого слова new мы можем создаваать объекты используя function

//===CLASS===
class Animal1 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

const currAnimal1 = new Animal1('кот') //когда мы создаем экземпляр объекта мы передаем в него значение и пишем слово new

console.log(currAnimal1.name) //кот
console.log(currAnimal1.getName()) //кот

//таким образом мы можем создать новые объекты используя один класс
const currAnimal2 = new Animal1('собака')
console.log(currAnimal2.name) //собака
console.log(currAnimal2.getName()) //собака

/*Итог: В ООП JS'a мы можем создавать объекты с помощью
ключ. слова function или ключ. слова class
современным считается 'class'
и имеенно объекты в ООП следуют создавать с помощью класса.
Чтобы создать ЭКЗЕМПЛЯР объекта мы используемый ключ. слово New а так же передаем знач. параметра см.в. стр.12||27||33
*/