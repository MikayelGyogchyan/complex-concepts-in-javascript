// TIME COMPLEXITY

const t1 = performance.now();

doSomething(); // run your function

const t2 = performance.now();
console.log(`Elapsed time was ${t2 - t2} milliseconds`);


/*
1. Constants rule: remove constants
2. sum rule: find the fastest growing term
3. product rule: take out the coefficient
*/

// Time complexity: Constant
// O(1)
function func() {
  let a = arr[0];
  let b = "the first value is " + a;
  return b + "!";
} 

// Time Complexity: Linear
// O(n)
// O(n/3) = O(1/3 * n) = O(n)
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
}

// Time Complexity: Quadratic
// O(n²)
// O(5 * n * n) = O(n²)
function matcher(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] === array[j]) {
        s;

        return `Match found at ${i} and ${j}`;
      }
    }
  }
  return "Not found";
}

// O(log(n) + 109) = O(log(n)
// O(log(n) + n = O(n)
// O(n * log(n) + n + 900) = O(n * log(n))


//
// time complexity of foo: O(n + n + n * n) = O(n²)
// in this example the 'z' is the 'n'
function foo(z, m) {
  for(let i = 0; i < z; i++) {
    console.log("fool" + m);
    bar(z)
  }
}
// time complexity of bar: O(n)
function bar(q) {
  for(let i = 0; i < q; i++) {
    console.log("bar!");
  }
}


// 
// O(2a) + O(2b) = O(a) + O(b) = O(a + b)
function twoInputsAdd(a, b) {
  let z = 0;
  for(let i = 0; i < a; i++) { // O(a)
    z = z + 1 // O(a)
  }
  for(let i = 0; i < b; i++) { // O(b)
    z = z + 1 // O(b)
  }
  return z;
}


// 
// O(a + 2(a * b)) = O(2(a * b)) = O(a * b)
function twoInputsMultiplyd(a, b) {
  let z = 0;
  for(let i = 0; i < a; i++) { // O(a)
    for(let i = 0; i < b; i++) { // O(a * b)
      z = z + 1 // O(a * b)
    }
  }
  return z;
}
