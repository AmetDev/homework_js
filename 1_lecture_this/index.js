//this
//typeof - this: objects 
console.log(this) //выводит глобальный объект Window, то есть стр Браузера

const user = {
    name: 'Amet',
    dateofBirth: 2005,
    getName() {
        //return user.name можно было бы так писать, но тогда метод будет не универсальным и будет привязан к user
        //для избежания привязанности свойства объекта в объекте используй this
        return this.name;
    },
    calcAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.dateofBirth;
    },
    getAllInfo: function() {
        const age = this.calcAge();
        console.log(`Имя:${this.name}, Возраст:${age}`)
    }

}
console.log(user.getName());
console.log(user.calcAge());
user.getAllInfo();

//bind, call, apply
//bind, call, apply - используются исключительно для функций

//1-call
const user2 = {
    name: 'Mark'
}
const user2Name = user.getName.call(user2)//this в функции getName будет заменено на user2
//Благодаря тому, что мы пишем в функции getName this при обращении к свойству 'name' т.е. (return this.name)
//мы можем заменить значение user на user2 при помощи метода call
console.log(user2Name)