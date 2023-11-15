// State

/*
we can create some different classes that will be, for example, state 
elements and we can delegate changes in the state of these classes to some 
common class that will be the state and which will change the internal 
state of these individual elements.
All the logic will be built on the Top level class that will change the 
internal values
*/

class Light {
  constructor(light) {
    this.light = light
  }
}

class RedLight extends Light {
  constructor() {
    super('red')
  }

  sign() {
    return 'Stop'
  }
}

class YellowLight extends Light {
  constructor() {
    super('yellow')
  }

  sign() {
    return 'Ready'
  }
}

class GreenLight extends Light {
  constructor() {
    super('green')
  }

  sign() {
    return 'Go!'
  }
}

class TrafficLight {
  constructor() {
    this.states = [
      new RedLight(),
      new YellowLight(),
      new GreenLight()
    ]
    this.current = this.states[0]
  }

  change() {
    const total = this.states.length
    let index = this.states.findIndex(light => light === this.current)

    if (index + 1 < total) {
      this.current = this.states[index + 1]
    } else {
      this.current = this.states[0]
    }
  }

  sign() {
    return this.current.sign()
  }
}

const traffic = new TrafficLight()
console.log(traffic.sign())
traffic.change()

console.log(traffic.sign())
traffic.change()

console.log(traffic.sign())
traffic.change()

console.log(traffic.sign())
traffic.change()

console.log(traffic.sign())
traffic.change()

console.log(traffic.sign())
traffic.change()