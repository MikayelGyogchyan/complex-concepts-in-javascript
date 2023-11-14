// Comand

/*
Comand pattern allows you to create a certain abstract shell over 
the functionality that allows you to control already through another 
object and thereby, as if recording certain states that were called.
A common character can be for ex Redux.
*/

class MyMath {
  constructor(initialValue = 0) {
    this.num = initialValue
  }

  square() {
    return this.num ** 2
  }

  cube() {
    return this.num ** 3
  }
}

class Command {
  constructor(subject) {
    this.subject = subject
    this.commandsExecuted = []
  }

  execute(command) {
    this.commandsExecuted.push(command)
    return this.subject[command]()
  }
}

const x = new Command(new MyMath(2))

console.log(x.execute('square')) // 4
console.log(x.execute('cube')) // 8

console.log(x.commandsExecuted) // [ 'square', 'cube' ]