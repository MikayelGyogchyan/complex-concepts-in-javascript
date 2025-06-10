// SPACE COMPLEXITY

/*
1. Constants rule: remove constants
2. sum rule: find the fastest growing term
3. product rule: take out the coefficient
*/


// O(1 + 1) = O(1)
function sumArray(arr) { // does not matter the size of the arr, but how much the algorithm uses (for sum and i)
  let sum = 0; // O(1)
  for(let i = 0; i < arr.length; i++) { // O(1)
    sum += arr[i]
  }
  return sum
}


// O(1 + n) = O(n)
function mapByAddingOne(arr) {
  let arr2 = []
    for(let i = 0; i < arr.length; i++) { // O(1)
      arr2[i] = arr[i] + 1 // O(n)
  }
  return arr2
}

/*
Big-O Complexity 

Excellent: O(1),        (constant time)
           O(log n),    (logarithmic time)
Good:      O(n),        (linear time)
Fair:      O(n log n),  (n log n time or linearithmic)
Bad:       O(n^2),      (quadratic)
Horrible:  O(2^n),      (exponential)
           O(n!),       (factorial time)
*/
