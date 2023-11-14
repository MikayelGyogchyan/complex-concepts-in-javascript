// Chain of responsability

/*
Behavior design patterns allow us to better communicate between objects of 
different types and, specifically, if we talk about the Chain of 
responsability pattern, this is a pattern that 
allows you to sequentially call a certain set of operations on the same 
object, and thereby simply sequentially identify them.
A typical example here could be the JQuery Library.
*/

class MySum {
  constructor(initialValue = 42) {
    this.sum = initialValue
  }

  add(value) {
    this.sum += value
    return this // important to return 
  }
}

const sum1 = new MySum()
console.log(sum1.add(8).add(10).add(1).add(9).sum)

const sum2 = new MySum(0)
console.log(sum2.add(1).add(2).add(3).sum)