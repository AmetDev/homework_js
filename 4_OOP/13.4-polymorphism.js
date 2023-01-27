//полиморфизм
//одно действие, несколько реализаций 

class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {}
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
   makeSound() {
    console.log('что-то');
   }
}
class  Hourse extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log('Иго-го');
    }
}