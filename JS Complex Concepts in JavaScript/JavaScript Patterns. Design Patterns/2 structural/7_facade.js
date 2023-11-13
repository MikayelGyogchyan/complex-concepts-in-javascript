// Facade

/*
Facade serves to create a simpler and perhaps unique interface for 
interacting with various classes, such a more common interface that 
allows make easier certain interactions.
A simple example of Facade can be the JQuery Library
*/

class Complaints {
  constructor() {
    this.complaints = []
  }

  reply(complaint) {}

  add(complaint) {
    this.complaints.push(complaint)
    return this.reply(complaint)
  }
}

class ProductComplaints extends Complaints {
  reply({id, customer, details}) {
    return `Product: ${id}: ${customer} (${details})`
  }
}

class ServiceComplaints extends Complaints {
  reply({id, customer, details}) {
    return `Service: ${id}: ${customer} (${details})`
  }
}

class ComplaintRegistry {
  register(customer, type, details) {
    const id = Date.now()
    let complaint

    if (type === 'service') {
      complaint = new ServiceComplaints()
    } else {
      complaint = new ProductComplaints()
    }

    return complaint.add({id, customer, details})
  }
}

const registry = new ComplaintRegistry()

console.log(registry.register('Mikayel', 'service', 'not available'))
console.log(registry.register('Joe', 'product', 'an error appears'))