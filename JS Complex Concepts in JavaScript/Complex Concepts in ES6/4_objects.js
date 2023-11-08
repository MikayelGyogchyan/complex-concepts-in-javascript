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
