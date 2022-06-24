// Learn
console.clear();

// Array.Set()

let data = ['name', 'VedaGna'];
let myMap = new Map([data]);

myMap.set('age', 5);

console.log(myMap); // { 'name' => 'VedaGna', 'age' => 5 }

for (let [key, value] of myMap) {
    console.log(`Key ${key} and Value ${value}`);
}

/* Key name and Value VedaGna
Key age and Value 5 */