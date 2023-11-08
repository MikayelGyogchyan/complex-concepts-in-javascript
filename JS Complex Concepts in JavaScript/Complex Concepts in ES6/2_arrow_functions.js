// Context
function log() {
  console.log(this)
}

const arrowLog = () => console.log(this)

const person = {
  name: 'Joe',
  age: 20,
  log: log,
  arrowLog: arrowLog,
  delayLog: function() {
    // const self = this
    global.setTimeout(() => {
      console.log(this.name + ' ' + this.age) // Joe 20
    }, 500)
  }
}

// console.log(global)
// person.arrowLog()

person.delayLog()
