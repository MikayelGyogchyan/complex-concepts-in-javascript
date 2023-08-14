const obj = {
  name: "Mikayel",
  age: 24,
  job: "Fullstack",
};

const entries = [
  ["name", "Mikayel"],
  ["age", 24],
  ["job", "Fullstack"],

];

// console.log(Object.fromEntries(entries)); // { name: 'Mikayel', age: 24, job: 'Fullstack' }
// console.log(Object.entries(obj)); // [ [ 'name', 'Mikayel' ], [ 'age', 24 ], [ 'job', 'Fullstack' ] ]

const map = new Map(entries);

// console.log(map); // Map(3) { 'name' => 'Mikayel', 'age' => 24, 'job' => 'Fullstack' }
// console.log(map.get('job')); // Fullstack

map
  .set('newField', 42) 
  .set(obj, 'Value of Object')

// console.log(map.get(obj));
 
// map.delete('job')
// console.log(map.has('job')); 
// console.log(map.size);
// map.clear()
// console.log(map.size);


// ___________________________

// for(let entry of map.entries()) {
//   console.log(entry);
// }

// for(let [key, value] of map.entries()) {
//   console.log(key, value);
// }

// for(let [key, value] of map) {
//   console.log(key, value);
// }
 

// for(let val of map.values()) {
//   console.log(val);
// }
 
// for(let key of map.keys()) {
//   console.log(key);
// }

// map.forEach((val, key, m) => {
//   console.log(val, key);
// })


// ________________________


// const array1 = [...map]
// const array2 = Array.from(map)

// console.log(array1);
// console.log(array2);

// const mapObj = Object.fromEntries(map.entries()) 
// console.log(mapObj);


const users = [
  {name: 'Mikayel'},
  {name: 'Joe'},
  {name: 'David'},
]

const visits = new Map()

visits
  .set(users[0], new Date())
  .set(users[1], new Date(new Date().getTime() + 1000 * 60))
  .set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user) {
  return visits.get(user)
}

console.log(lastVisit(users[2])); // 2023-08-14T13:39:40.192Z

