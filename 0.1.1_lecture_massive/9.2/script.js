
const developerNames = ['Maxim', 'Igor', 'Nastya', 'Irina']

//for
//console.log(developerNames[2])//Nastya
for (let i = 0; i < developerNames.length; i++) {
    //console.log('i', i)
    console.log('item:', developerNames[i])
}

//for of
for (const name of developerNames) {
    console.log('forof:', name)
}

//forEach
developerNames.forEach((element, index, array) => {
    console.log('foreach:', element, index, array)
    
});