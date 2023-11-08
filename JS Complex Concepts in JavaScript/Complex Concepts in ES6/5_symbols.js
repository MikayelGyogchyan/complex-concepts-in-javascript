const symbol = Symbol('demo')
const other = Symbol('demo')

// console.log(symbol)
// console.log(other)
//
// console.log(symbol === other)

const obj = {
  name: 'Elena',
  demo: 'DEMO',
  [symbol]: 'meta'
}

for (let key in obj) {
  console.log(key)
// name
// demo
}

console.log(obj.demo) // DEMO
console.log(obj[symbol]) // meta

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol
