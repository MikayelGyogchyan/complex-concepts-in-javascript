// Observer

/*
in essence, this design pattern creates one-to-many dependencies, 
the performer says that this is a guy, we have nothing to do with the idea, 

the idea is that essentially we have one object of which we can trigger 
change calls.
Then all other objects that are subscribed to these changes they 
receive these updates and do their special functionality.
This pattern can be called differently (publisher, subscriber, dispatcher, listener).. 
but we go with Observer 
*/

class Subject {
  constructor() {
    this.observers = []
  }

  subscribe(observer) {
    this.observers.push(observer)
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer)
  }

  fire(action) {
    this.observers.forEach(observer => {
      observer.update(action)
    })
  }
}

class Observer {
  constructor(state = 1) {
    this.state = state
    this.initialState = state
  }

  update(action) {
    switch (action.type) {
      case 'INCREMENT':
        this.state = ++this.state
        break
      case 'DECREMENT':
        this.state = --this.state
        break
      case 'ADD':
        this.state += action.payload
        break
      default:
        this.state = this.initialState
    }
  }
}

const stream$ = new Subject()

const obs1 = new Observer()
const obs2 = new Observer(42)

stream$.subscribe(obs1)
stream$.subscribe(obs2)

stream$.fire({type: 'INCREMENT'})
stream$.fire({type: 'INCREMENT'})
stream$.fire({type: 'DECREMENT'})
stream$.fire({type: 'ADD', payload: 10})

console.log(obs1.state)
console.log(obs2.state)