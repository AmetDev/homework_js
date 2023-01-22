//объедение объектов
const developerInfo = {
    age: 25,
    experience: 3,
    name: 'Maxim',
}

const developerExtraInfo = {
    name: 'Igor',
    height: 180,
    isJunior: false,
}

const developer = {
    ...developerInfo,
    ...developerExtraInfo,
}

console.log(developer)
//{ age: 25, experience: 3, name: 'Igor', height: 180, isJunior: false }

const developer1 = {
    ...developerInfo,
    ...developerExtraInfo,
    name: 'anna',
}

console.log(developer1)
//{ age: 25, experience: 3, name: 'anna', height: 180, isJunior: false }

// 2 Object.assign
const developer2 = Object.assign(developerInfo, developerExtraInfo);
console.log(developer2)
//{ age: 25, experience: 3, name: 'Igor', height: 180, isJunior: false }