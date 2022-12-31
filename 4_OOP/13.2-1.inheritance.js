//Наследование
//Это создание дочерних классов на основе базовых
class Plane {
    constructor(type, numberofPassengers) {
        this.type = type;
        this.numberofPassengers = numberofPassengers;
    }
    startFlight() {
        console.log('Полетели!');
    }

}

//ключ слова 'extends' 'super'
//с помощью ключ. слова super можно вызывать конструктор род. класса
//а наследуем класс родительский с помощью к.сл. extends
class MilitaryPlane extends Plane{
    constructor(type, typeclone) {
        super(type, 0)
        this.numberOfGuns = 0;
        this.typeclone = typeclone //доп. хоть мы и ипортировали конструктор из род. класса мы все равно можем вность в него доп. св-ва
    }
    setNumberOfGuns(numberOfGuns) {
        this.numberOfGuns = numberOfGuns;
    }
    shoot() {
        console.log('Стреляем!')
    }
}

// const plane = new Plane('Пассажирский самолет', 1000) //выводит Plane { type: 'Пассажирский самолет', numberofPassengers: 1000 } Полететели!
// console.log(plane)
// plane.startFlight();
const militaryPlane = new MilitaryPlane('military', 'militaryClone')
//Мы можем использовать метод род. класса в дочернем классе след. образом =>
militaryPlane.startFlight(); //Полетели!
//Если в доч. в класс добавить тот же самый метод с тем же названием startFlight  и поменять тело функции, то он 
//то сработает метод именно в дочернем классе, т.к. он найдет его первым и первым он сработает
militaryPlane.setNumberOfGuns(4);
militaryPlane.shoot();
console.log('militaryPlane', militaryPlane)


//instanceof - проверяет принадлежит ли экземпляр(объект) к классу 
//В сравнии 46 стр. тоже true, т.к. class MilitaryPlane принадлежит Plane то и экземпляр militaryPlane будет принадлежать 


console.log(militaryPlane instanceof MilitaryPlane) //true
console.log(militaryPlane instanceof Plane) //true

class Dog {
    constructor(type, health) {
        this.type = type;
        this.health = health;
    }
}

console.log(militaryPlane instanceof Dog) //false
