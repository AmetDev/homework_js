const developer = {
    //key: value,
    name: 'Maxim',
    job: 'Front-End разработчик',
    experience: 24,
    jobAllInfo: {
        type: 'Front-End',
        framework: 'ReactJS',
    }

}
console.log('developer', developer)

//Получение значения объекта по его ключу (2 способа)

//1.
// console.log('name:', developer.name) //Maxim
// console.log('jobinfoall:', developer.jobAllInfo) //jobAllInfo: { type: 'Front-End', framework: 'ReactJS' }
// //лучше первый способ

// //2
// console.log('name:', developer['name']) //Maxim
// console.log('jobinfoall:', developer['jobAllInfo']) //jobAllInfo: { type: 'Front-End', framework: 'ReactJS' }

// //Для чего нужен 2-й способ
// const key = 'name'
// console.log('name:', developer[key]) //Maxim

console.log('type', developer.jobAllInfo.type) //type Front-End
console.log('type', developer['jobAllInfo']['type']) //type Front-End



