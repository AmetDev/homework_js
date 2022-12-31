class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    compareAge(person1, person2, person3) {
       
        const InPerson1 = Object.values(person1)
        const InPerson2 = Object.values(person2)
        const InPerson3 = Object.values(person3)

        console.log(InPerson1, InPerson2, InPerson3)
        if(InPerson1 > InPerson2 && InPerson1 >InPerson3) {
            console.log()
        }
      
    }
}
const person1 = new Person('Jolin', 34);
const person2 = new Person('Jotaro', 35);
const person3 = new Person('Joseph', 36);
person1.compareAge(person1, person2, person3);
