const user = {
    name: 'Maksim',
    programmingLanguage: 'JavaScript',
    getName() {
        return this.name
    },
    //У стрелочной функции нет this
    getProgrammingLanguage: () => {
        console.log(this) //window
        return this.programmingLanguage
    },
     //У стрелочной функции нет this
     getProgrammingLanguage1: function() {
        console.log(this) //выведет объект в контексте которого он ссылается
        return this.programmingLanguage
    }

}

console.log('getName', user.getName()) //Maksim

const newGetName = user.getName

console.log('NewGetName', newGetName()) //window происходит потеря контекста т.к. не используются не call/apply/bind
console.log('NewGetName', newGetName.call(user)) //Maksin 

console.log(user.getProgrammingLanguage());//Window

console.log(user.getProgrammingLanguage1());//JavaScript