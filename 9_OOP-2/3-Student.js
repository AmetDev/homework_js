class Student extends User {
    constructor(username, password, nickname) {
        super(username, password);
        this.nickname = nickname
    }
    getStudentCourses() {
        return [1,2,3]
    }
    validatePassword () {
        // > 6!!! 10
        super.validatePassword()
        if(this.password.length >  10) {
            return true
        } else {
            return false
        }
    }
}