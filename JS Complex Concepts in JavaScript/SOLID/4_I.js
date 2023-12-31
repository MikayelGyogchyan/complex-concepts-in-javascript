// Interface segregation principle

// The incorrect way

// class Animal {
//   constructor(name) {
//     this.name = name
//   }

//   walk() {
//     console.log(`${this.name} can walk`)
//   }

//   swim() {
//     console.log(`${this.name} can swim`)
//   }

//   fly() {
//     console.log(`${this.name} can fly`)
//   }
// }

// class Dog extends Animal {
//   fly() {
//     return null
//   }
// }

// class Eagle extends Animal {
//   swim() {
//     return null
//   }
// }

// class Whale extends Animal {
//   fly() {
//     return null
//   }

//   walk() {
//     return null
//   }
// }

// const dog = new Dog('Pickles')
// dog.walk() // Pickles can walk
// dog.swim() // Pickles can swim

// const eagle = new Eagle('Eagle')
// eagle.fly() // Eagle can fly
// eagle.walk() // Eagle can walk

// const whale = new Whale('Big blue bro')
// whale.swim() // Big blue bro can swim



// The correct way

class Animal {
  constructor(name) {
    this.name = name
  }
}

const swimmer = {
  swim() {
    console.log(`${this.name} can swim`)
  }
}

const flier = {
  fly() {
    console.log(`${this.name} can fly`)
  }
}

const walker = {
  walk() {
    console.log(`${this.name} can walk`)
  }
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, swimmer, walker)
Object.assign(Eagle.prototype, flier, walker)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog('Pickles')
dog.walk() // Pickles can walk
dog.swim() // Pickles can swim

const eagle = new Eagle('Eagle')
eagle.fly() // Eagle can fly
eagle.walk() // Eagle can walk

const whale = new Whale('Big blue bro')
whale.swim() // Big blue bro can swim
