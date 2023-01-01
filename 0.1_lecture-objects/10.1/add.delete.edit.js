const student = {
    id: 1,
    programmingLanguage: 'JavaScript',
    hasExperienceInReact: false,
};

//=====================================================================
//Добавление
student.expirence = 6;
console.log(student)
//ВЫВОД
// /{
//     id: 1,
//     programmingLanguage: 'JavaScript',
//     hasExperienceInReact: false,
//     expirence: 6 //добавленое новое значение
//   }
//=====================================================================



//=====================================================================
//Удаление
//delete
delete student.hasExperienceInReact; 
console.log(student)
//вывод { id: 1, programmingLanguage: 'JavaScript', expirence: 6 }
//=====================================================================



//=====================================================================
//Изменение
student.expirence = 12;
student.id = 2;
console.log(student)
//вывод стал таким: { id: 2, programmingLanguage: 'JavaScript', expirence: 12 }
//=====================================================================