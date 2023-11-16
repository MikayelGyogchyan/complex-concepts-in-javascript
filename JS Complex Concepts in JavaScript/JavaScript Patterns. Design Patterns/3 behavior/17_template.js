// Template

/*
It defines some algorithm, some skeleton of the future algorithm, but at 
the same time it delegates the creation of specific functionality to the 
child classes. That is, it defines a certain structure and the child classes 
already implement the specific functionality without changing the behavior 
of the base class
*/

class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  responsibilities() {}

  work() {
    return `${this.name} performs ${this.responsibilities()}`
  }

  getPaid() {
    return `${this.name}'s salary is ${this.salary}`
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'process of creating program'
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'Testing process'
  }
}

const dev = new Developer('Mikayel', 22000)
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Joe Carrot', 20000)
console.log(tester.getPaid())
console.log(tester.work())