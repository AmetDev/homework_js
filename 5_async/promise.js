const developer = {
    name: 'Maxim',
    isJSDev: true,
};

// setTimeout(() => {
//     console.log('setTimeout')
// }, 3000);
//
// console.log(developer)
// setInterval(() => {
//     console.log('SetInterval')
// }, 1000)

//pending - ожидание
//fullfilled - успешное выполнение
//rejected - выполнение с ошибкой
const promise = new Promise((resolve, reject) => {
    if(developer.isJSDev){
        setTimeout(() => {
            resolve(`${developer.name} haved JS developer`)
        }, 3000)
    } else {
        reject(`${developer.name} NO haved JS developer`)
    }
});
console.log(promise)
//then catch, finally
//then - для обработки промиса с успехом
//catch - для обработки проммиса с ошибкой
//finally - сработает в любом случаи
promise
    .then((successMessage) => {
    console.log(successMessage)
})
    .catch((error) => {
        console.log('error',error)
    })
    .finally(() => {
        console.log('finnaly')
    })