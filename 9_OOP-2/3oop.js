//class => function
//ab class => class => object


let a = 'Ivan';
let b = '7787ftyfytf786g807777';
const person = new User(a, b);
console.log(person);
console.log(person.username);
console.log(person.validatePassword()) //true

let firstStudent = new Student(a,b, 'Ivan777');
console.log(firstStudent)

console.log(firstStudent.getStudentCourses())
console.log(firstStudent.validatePassword())