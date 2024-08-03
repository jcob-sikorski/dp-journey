// write fn which calcualtes how many ways you can travel
// from top-left corner to bottom-right given you can
// only move down or right. the grid has dims m * n

const gridTraveler = (m, n) => {
  // base case (grid is of size 1)
  if (m === 1 && n === 1) {
    return 1;
  }

  // invalid grid size
  if (m === 0 || n === 0) {
    return 0;
  }

  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};



console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 2
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
// console.log(gridTraveler(18, 18)); // 2333606220



const gridTravelerMemo = (m, n, memo = {}) => {
  // *** check if are the args in the memo ***
  // make key a string
  const key = m + ' ' + n;

  if (key in memo) {
    return memo[key];
  }

  // base case (grid is of size 1)
  if (m === 1 && n === 1) {
    return 1;
  }

  // invalid grid size
  if (m === 0 || n === 0) {
    return 0;
  }

  memo[key] = gridTravelerMemo(m - 1, n, memo) + gridTravelerMemo(m, n - 1, memo);

  return memo[key];
};

console.log(gridTravelerMemo(18, 18)); // 2333606220