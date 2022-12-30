const mainHero = {
    fullName: 'SpiderMan',
    health: 65,
    strenght: 5,
};

const badHero = {
    fullName: 'Joker',
    health: 55,
    strenght: 10,
}

function printHeroInfo(extraInfo = '') {
    console.log(this);
    console.log(`Имя:${this.fullName}, Здоровье:${this.health}, Сила:${this.strenght},${extraInfo}`)
}

//bind, call, apply
//CALL - вызывает функцию 
printHeroInfo.call(badHero, 'Роль: Злодей');

//APPLY передается как массив
printHeroInfo.call(badHero, ['Роль: Злодей']);

//BIND - создает новую функцию 
const bindendPrintHeroInfo = printHeroInfo.bind(mainHero, 'Роль: Главный герой');
bindendPrintHeroInfo()
//bind создает новый экземпляр

