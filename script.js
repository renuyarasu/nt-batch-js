// Learn
console.clear();

// Array

let newArray = [1, 2, 3, 4, 5];

// Find > 2 value

let result = newArray.filter(function (val, index) {
    return val > 2
})

console.log(result); //[ 3, 4, 5 ]
