// function hello() {
//   console.log("Hello", this); 
// }

// const person = {
//   name: "Mikayel",
//   age: 24,
//   sayHello: hello,
//   sayHelloWindow: hello.bind(window),
//   logInfo() {
//     console.log(`Name is ${this.name}`); 
//   },
// };

// person.logInfo();

// const jason = {
//   name: "Jason",
//   age: 23,
// };

// person.logInfo.bind(jason)(); 

//

// const person2 = {
//   name: "Mikayel",
//   age: 24,
//   sayHello: hello,
//   sayHelloWindow: hello.bind(window),
//   logInfo() {
//     console.group(`${this.name} info:`);
//     console.log(`Name is ${this.name}`);
//     console.log(`Name is ${this.age}`);
//     console.groupEnd();
//   },
// };

// person2.logInfo.bind(jason)();

//


// const person4 = {
//   name: "Mikayel",
//   age: 24,
//   sayHello: hello,
//   sayHelloWindow: hello.bind(window),
//   logInfo(job, phone) {
//     console.group(`${this.name} info:`);
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`Job is ${job}`); 
//     console.log(`Phone is ${phone}`);
//     console.groupEnd();
//   },
// };

// const fnJasonInfoLog4 = person4.logInfo.bind(jason);
// fnJasonInfoLog4("Front-End", "666-666-666");


//

// const person5 = {
//   name: "Mikayel",
//   age: 24,
//   sayHello: hello,
//   sayHelloWindow: hello.bind(window),
//   logInfo(job, phone) {
//     console.group(`${this.name} info:`);
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`Job is ${job}`);
//     console.log(`Phone is ${phone}`);
//     console.groupEnd();
//   },
// };

// const fnJasonInfoLog5 = person5.logInfo.bind(jason, "Front-End", "666-666-666");
// fnJasonInfoLog5();

//

// const person6 = {
//   name: "Mikayel",
//   age: 24,
//   sayHello: hello,
//   sayHelloWindow: hello.bind(window),
//   logInfo(job, phone) {
//     console.group(`${this.name} info:`);
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`Job is ${job}`);
//     console.log(`Phone is ${phone}`);
//     console.groupEnd();
//   },
// };

// person6.logInfo.call(jason, "Front-End", "666-666-666");


// 

// const array = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//   return arr.map((i) => {
//     return i * n;
//   });
// }
// console.log(multBy(array, 5)); 


// Better option, using Prototype


Array.prototype.multBy = function (n) {
  return this.map((i) => {
    return i * n;
  });
};

console.log(array.multBy(10)); 

[5, 8, 12].multBy(4); 

