let obj = {name: 'weakmap'}

// const arr = [obj]

// obj = null

// console.log(arr[0]);

const map = new WeakMap([
  [obj, 'obj data']
])
// get set delete has
obj = null

console.log(map.get(obj));
 


// __________________


const cache = new WeakMap()

function casheUser(user) {
  if(!cache.has(user)) {
    cache.set(user, Date.now)
  }
  return cache.get(user)
}

let joe = {name: 'Joe'}
let alex = {name: 'Alex'}

casheUser(joe)
casheUser(alex)

joe = null

console.log(cache.has(joe));
console.log(cache.has(alex));