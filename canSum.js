// write a fn canSum(targetSum, numbers) that takes in a target sum
// and an array of numbers as arguments

// the function should return a boolean indicating whether
// or not it is possible to generate the targetSum using numbers from
// the array

// canSum(7, [5, 3, 4, 7]) -> true

// canSum(7, [2, 4]) -> false


const canSum = (targetSum, numbers) => {
  if (targetSum === 0) {
    return true;
  }

  if (targetSum < 0) {
    return false;
  }

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers) === true) {
      return true;
    }
  }

  return false;
};


console.log(canSum(7, [2, 3])); // true

// this one hangs
// console.log(canSum(300, [7, 14])) // false


const canSumMemo = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) {
    return memo[targetSum];
  }

  if (targetSum === 0) {
    return true;
  }

  if (targetSum < 0) {
    return false;
  }

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSumMemo(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }

  memo[targetSum] = false;
  return false;
};

console.log(canSumMemo(300, [7, 14])) // false