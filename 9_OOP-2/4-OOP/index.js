class User {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`${this.name} Hello!`)
        return this.name
    }
}


const amet = new User('Amet')
console.log(amet)
console.log(typeof User) //function

class Person extends User {
    constructor(name, email) {
        super(name)
        this.email = email
    }
    sayHello2() {
        return `3223 ${super.sayHello()}`
    }
}

const person = new Person('Amex', 'ametsejdaliev@gmail.com')
//console.log(person)
//console.log(person.sayHello())
console.log(person.sayHello2())