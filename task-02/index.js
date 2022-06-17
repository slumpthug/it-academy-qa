let arr = [2,3,4,5] 

function test(number) {
    return arr.filter(num => number % num === 0) 
}

console.log(test(36));

console.log(test(55));

console.log(test(333));