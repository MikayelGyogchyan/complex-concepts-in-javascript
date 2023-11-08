// Hoisting
b = 20

console.log(b) // ReferenceError: Cannot access 'b' before initialization

let b = 10

//

function hoisted() {
  age = 26
}

let age
hoisted()
console.log(age) // 26

