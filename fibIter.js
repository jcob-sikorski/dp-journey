const fib = (n) => {
  // we index from 0 to n that's why n+1
  // + init the table with 0s
  const table = Array(n+1).fill(0);

  // first number of fib is 1
  table[1] = 1;

  for (let i = 0; i <= n; i++) {
    // let's increment both next cells by the value
    // of the current cell
    table[i+1] += table[i];
    table[i+2] += table[i];
  }

  console.log(table);

  return table[n];
};

console.log(fib(6));