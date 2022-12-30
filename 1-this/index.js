const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel: function() {
        const currentlevel = this.level += 1;
        if (currentlevel == 2) {
            const crrLevel =  this.stack.push('CSS');
            return crrLevel;
        } else if (currentlevel == 3) {
            const crrLevel =  this.stack.push('JavaScript');
            return crrLevel;
        } else if (currentlevel == 4) {
            const crrLevel =  this.stack.push('React');
            return crrLevel;
        } else if (currentlevel == 5) {
            const crrLevel =  this.stack.push('NodeJS');
            return crrLevel;
        }  
    }
}
student.improveLevel()
student.improveLevel()
student.improveLevel()
student.improveLevel()
student.improveLevel()
console.log(student.stack)


