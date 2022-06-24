// Learn
console.clear();

// Array.Set()

let myArray = [1, 2, 3, 4, 5];
let mySet = new Set(myArray);
mySet.add(2);
mySet.delete(1);
console.log(mySet);

let h = mySet.has(2)

console.log(mySet);

for (let i of mySet) {
    console.log(i);
}
