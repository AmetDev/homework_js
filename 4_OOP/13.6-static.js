class Car {
    static isCar(car){
        return car instanceof Car;
    };
    static #initialParams = {
        name: 'audi',
        maxspeed: '150',
    }
    constructor(name, maxspeed) {
        this.name || Car.#initialParams.name;
        this.maxspeed = maxspeed || Car.#initialParams.maxspeed;
    }
    drive(){
        console.log(`Машина ${this.name} сейчас в пути`)
    }
}

// const isCar = Car.isCar(car)//true
// console.log(isCar)  //Car { maxspeed: '200' }
// console.log(car) //car true

// console.log('car',Car.isCar(car)) //true
const car = new Car();
console.log(car);
//если в поле или методе не используется this, то используем static
//стоит делать приватным
//static стоит использовать когда объекты принадлежат к самому классу, так же нельзя использовать this