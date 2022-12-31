class Student {
    constructor(name, age, technologies, status) {
        this.name = name;
        this.age = age;
        this.technologies = technologies;
        this.status = status;
    }
    setTechnologies() {
        this.technologies = [
            this.technologies,

        ];
    }
    setNewStatus(newStatus) {
        this.status = newStatus;
    }
}

const student = new Student ('Maxim', 24);
student.setTechnologies(['HTML', 'CSS', 'JavaScript']);
student.setNewStatus('Middle');
console.log(student);