// Object
const address = {
  country: 'USA',
  city: 'NY',
  // street: 'Broadway',
  concat: function() {
    return `${this.country}, ${this.city}, ${this.street}`
  }
}

// const {city, country, street = 'Wall street', concat: addressConcat} = address
//
// console.log(addressConcat.call(address))
// console.log(street)

const {city, ...rest} = address
console.log(city) // NY
console.log(rest) // { country: 'USA', concat: [Function: concat] }

// const newAddress = {...address} // Copy of address
const newAddress = {...address, street: 'Wall street', code: 123} // We can copy the object and change some properties, for ex the street, we can also add properties

console.log(newAddress)
/*
{
  country: 'USA',
  city: 'NY',
  concat: [Function: concat],
  street: 'Wall street',
  code: 123
}
*/

// console.log(address.concat())