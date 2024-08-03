// write function which returns n-th number of fib seq:
// fib(n): 1, 1, 2, 3, 5, ...

const fib = (n) => {
  if (n <= 2) {
    return 1;
  }

  return fib(n-1) + fib(n-2);
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
// if we run this it will take some time to compute the answer recursively
// console.log(fib(50));

// let's stary by drawing some things (notes)


// let's implement memoization
// we'll use some fast access data structure like hashmap/bitmap/matrix

//    js object keys will be args to the fn, value will be the return value

// memo will store the n as a key and value a return values for this function
const fibMemo = (n, memo = {}) => {
  // *** first we check for existence of the key if not then we save ***
  if (n in memo) {
    return memo[n];
  }

  if (n <= 2) {
    return 1;
  }

  // *** if key is not in the memo we'll do manual calculation ***

  //  we're passing memo to the functions below too, 
  //  pass by reference, we're not receiving copy of it
  memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);

  return memo[n];
};

console.log(fibMemo(50));