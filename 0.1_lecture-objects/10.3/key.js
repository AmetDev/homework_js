string | symbol


const user = {
    name: 'Maxim',
    10: '12234',
    undefined: undefined,
    [false]: false,
}
console.log(Object.keys(user))
//[ '10', 'name', 'undefined', 'false' ]


const id = Symbol('id');

const user1 = {
    [id]: 1,
    name: 'Maxim',
}
console.log(user1)
