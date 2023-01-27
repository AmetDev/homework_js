//Инкапсуляция

//public

//private #
//Для того чтоб сделать метод или поле приватным мы должны перед "." указать #
//и тогда к полю или методу будет доступ исключительно внутри класса в котором он определен

class Developer {
    #salary
    constructor(name, programmingLanguage) {
        this.name = name;
        this.programmingLanguage = programmingLanguage;
        this.#salary = 3000//можем работать исключительно только в классе developer
    }

    get devSalary() {
        return this.#salary
    }
    set setSalary(salary) {
        this.#salary = salary
    }

    startCoding() {
        console.log(this.#salary) //с помощью # мы получаем доступ к private св-ву класса Developer
        console.log(`${this.name} начинает писать код`)
    }
    //так же можно делать методы тоже приватными
    #printProgrammingLanguage() {
        console.log(`Язык программирования:${this.programmingLanguage}`)
    }
}

const developer = new Developer('Максим', 'ДЖАВАСКРИПТ');
console.log(developer.name)
console.log(developer.programmingLanguage)
developer.startCoding()

class JuniorDeveloper extends Developer {
    constructor(name, programmingLanguage) {
        super(name, programmingLanguage)
    }
}
const juniorDeveloper = new JuniorDeveloper('Igor', 'JS');
//juniorDeveloper.printProgrammingLanguage() если мы используем приватность для метода мы не можем использовать его на прямую
//однако можно метод вызвать в друго методе(startCoding), а затем вызвать метод startCoding и в нем сработает тот самый приват.метод
console.log(developer.salary) //undefined
//приватные поля и методы нужны для того, чстоб использовать их только в самом классе

//get and set
//get используется для того, чтоб получить значение приватного поля
console.log(developer.devSalary) //3000 
//set-устанавливает значение указанного поля
developer.setSalary = 5000 
console.log(developer.devSalary)//5000
//Вывод: Инкапсуляция - это скрытие данных от доступа вне класса либо при наследование.  