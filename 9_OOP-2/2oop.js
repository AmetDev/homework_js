let a = {
    "text": 'Hello',
    "color": 'red',
    "bold": true,
    "show": function() {
        console.log(this.color);
    }
};
let b = {
    "fontSize": '24px',
    __proto__: a
}
b.color = 'green';
b.show();
//b = 5; => так делать нельзя, грубая ошибка, прототипом может только выступать только объект
let c = {
    "fontFamily": 'Verdana',
    __proto__: b
}
console.log(c)
console.log(c.bold)
// a => b => c
const bol = c.hasOwnProperty("fontSize") //false
const bol1= c.hasOwnProperty("fontFamily") //true
console.log('hasOwnProperty',bol)
console.log('hasOwnProperty1',bol1)