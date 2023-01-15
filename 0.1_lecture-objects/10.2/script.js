//7 - примтивы (не ссылочный тип)
//1 - не примитив - объект (ссылочный тип)

const setName = (entity, value) => {
    if(typeof entity === 'object') {
        console.log("hello")
        entity.name = value;
    } else {
        console.log("bye")
        entity = value;

    }
}
const developer = {
    name: 'Maxim',
}

let developerName = 'Maxim';

setName(developer, 'Max');
//setName(developerName, 'Max')
console.log('developerName', developerName)
console.log('developer', developer)
// const entity = {};
// const entityCopy = entity;
// console.log(entity === entityCopy) //true
// console.log({} === {});//false
// console.log([] === []);//false
// console.log('hello' === 'hello') //true, т.к. у примитивных объектов нет ссылочных объектов