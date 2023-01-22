const developer = {
    //key: value,
    name: 'Maxim',
    job: 'Front-End разработчик',
    experience: 24,
    jobAllInfo: {
        type: 'Front-End',
        framework: {
            name: 'ReactJS'
        }
    }

}

//опциональная точка ?.
//console.log(developer.jobAllInfo.framework);

//1
//if(developer.jobAllInfo.framework) {

// if(developer && developer.jobAllInfo && developer.jobAllInfo.framework) {
//     console.log("Разработчик уже знает фреймворк")
// } else {
//     console.log("Разработчик еще не знает фреймворк")
// }

//2 
if(developer?.jobAllInfo?.framework?.name) {
    console.log("Разработчик уже знает фреймворк")
} else {
    console.log("Разработчик еще не знает фреймворк")
}
