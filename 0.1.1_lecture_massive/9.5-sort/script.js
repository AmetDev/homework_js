const salariesOfDevelelopers = [400, 500, 600, 2000, 350];

//sort
salariesOfDevelelopers.sort((a, b) => {
    return a - b;
});
console.log(salariesOfDevelelopers) //[ 350, 400, 500, 600, 2000 ]