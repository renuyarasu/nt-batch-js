// Learn
console.clear();

// Array

let newArray = [1, 2, 3, 4, 5];

// Find all elemnets > 2 

let result = newArray.every(function (val, index) {
    return val > 2
})

console.log(result); // false
