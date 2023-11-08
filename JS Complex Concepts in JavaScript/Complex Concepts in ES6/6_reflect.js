class Student {
  constructor(name) {
    this.name = name
  }

  greet() {
    console.log(`Hi! My name is ${this.name}`) // Hi! My name is Tester
  }
}

class ProtoStudent {
  university = 'Oxford'
}

// const student = new Student('Joe')
// const student = Reflect.construct(Student, ['Joe'], ProtoStudent); // ProtoStudent { name: 'Joe' }
const student = Reflect.construct(Student, ['Joe'])

console.log(student.__proto__ === Student.prototype) // false

Reflect.apply(student.greet, {name: 'Tester'}, [])
console.log(Reflect.ownKeys(student)) // [ 'name' ]

Reflect.preventExtensions(student)

student.age = 25

console.log(Reflect.isExtensible(student)) // false

console.log(student) // Student { name: 'Joe' }
