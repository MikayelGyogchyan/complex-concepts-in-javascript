const first = {a: 1}
const second = {b: 2}

// Object.is(a, b)

// ckecking the equivalence
// console.log(Object.is(20, 20)) true  
// console.log(Object.is(20, 10)) false

// Object.is([], []); // false

// Object.is(0, -0); // false
// Object.is(+0, -0); // false

// Object.is(NaN, 0 / 0); // true
// Object.is(NaN, Number.NaN); // true

const obj = Object.assign({}, first, {
  c: 2,
  d: 3
})
// console.log(obj)

console.log(Object.entries(obj)) // [ [ 'a', 1 ], [ 'c', 2 ], [ 'd', 3 ] ]
console.log(Object.keys(obj)) // [ 'a', 'c', 'd' ]
console.log(Object.values(obj)) // [ 1, 2, 3 ]

// An array is also an object and in its prototype it can have functions
// related to objects.
// If we want to get only own keys of the object, then we need to add a 
// checkup if we doesn't want to enter to the prototype, because a loop
// runs also throughout the prototype
// This permits us to reduce errors 

for (let key in person) {
  if(person.hasOwnProperty(key)) {
    console.log(person[key]);
  }
}
