const numbers = [2, 8, 4, 6, 3];


function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const dobuled = doubleIt(number)
        output.push(dobuled);
    }
    return output ;
}

function doubleItOld(number){
return num * 2
}

const doubleIt = num => num * 2 ;

const makeDoubled = numbers.map(doubleIt)
const makeDoubleDirect = numbers.map(num => num * 2)

const fivetimes = [1, 2,3,4,5].map(x => x * 5)
console.log(fivetimes)

const result = getDoubles(numbers) ;
console.log(result)
console.log(makeDoubled)
console.log(makeDoubleDirect)