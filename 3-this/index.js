const footballer = {
    fullName: 'Cristiano Ronaldo',
    attack: function() {
        console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
    },
    scoreGoal(sound) {
        console.log(`${this.fullName} забил гол! Вот это да!`);
        this.celebrate(sound);
    },
    celebrate(sound){
        console.log(sound);
    },
    goToSubstitution: function(newPlayer) {
        console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
    }
};
const attack = footballer.attack;
const score = footballer.scoreGoal;
const subtitute = footballer.goToSubstitution;
const att1 = attack.bind(footballer);
att1();
score.call(footballer, 'Сииииии');
subtitute.apply(footballer, ['Paulo Dibala']);