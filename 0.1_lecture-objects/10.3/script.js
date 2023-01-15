const goodInfo = {
    price: 80,
    id: 1,
    currency: '$',
    name: 'shoes',
}

console.log('goodInfo', goodInfo);

//for in
for (const key in goodInfo) {
    const value = goodInfo[key];
    console.log('value',value)
}

//Object.keys
const keys = Object.keys(goodInfo)
console.log('keys', keys)

//Object.values
const values = Object.values(goodInfo)
console.log('values', values)

//Object.entires 
const entries = Object.entries(goodInfo)
console.log('entries', entries)

