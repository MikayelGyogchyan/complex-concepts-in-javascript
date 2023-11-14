// Iterator 

/*
Essentially, the idea is that we create some kind of object, 
or in our case, we will create a class from which we can sequentially 
access certain information. That’s why it’s called an iterator
*/

class MyIterator {
  constructor(data) {
    this.index = 0
    this.data = data
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return {
            value: this.data[this.index++],
            done: false
          }
        } else {
          this.index = 0
          return {
            done: true,
            value: void 0 // void 0 === undefined
          }
        }
      }
    }
  }
}

function* generator(collection) {
  let index = 0

  while (index < collection.length) {
    yield collection[index++]
  }
}


const iterator = new MyIterator(['This', 'is', 'iterator'])
const gen = generator(['This', 'is', 'iterator'])

// for (const val of gen) {
//   console.log('Value: ', val)
// }

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)