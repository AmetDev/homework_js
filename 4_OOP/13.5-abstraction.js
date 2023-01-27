//абстракция 
class Footballer {
    constructor (name, club) {
        this.name = name;
        this.club = club;
    }
    shoot() {}
    celebrateGoal() {}
    pass() {}
}

class Forward extends Footballer {
    constructor(name, club) {
        super(name, club);
    }
    shoot() {
        console.log('очень сильный удар')
    }
    celebrateGoal() {
        console.log('да! я забил гол!')
    }
    pass() {
        console.log('средненький пас')
    }
}