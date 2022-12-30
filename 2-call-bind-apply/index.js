const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
        return 'Гав-Гав';
    }
}
const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
        return 'Чик-чирик';
    }
}

function makeDomestic(isDomestic) {
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}, домашние животное:${isDomestic}`)
}

const newMakeDomestic =  makeDomestic.bind(dog, true)
newMakeDomestic()

makeDomestic.call(bird, false)
makeDomestic.apply(bird, [false])
