// write a fn bestSum(targetSum, numbers) that takes in a targetSum
// and an array of numbers as args

// the fn should return an array containing the shortest comb
// of numbers that add up to exactly the targetSum

// if there's a tie for the shortest comb, you may return
// any one of the shortest

const bestSum = (targetSum, numbers) => {
  if (targetSum === 0) {
    return [];
  }

  if (targetSum < 0) {
    return null;
  }

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers);

    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination;
      }
    }
  }

  return shortestCombination;
};

console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(7, [2, 3])); // [ 3, 2, 2 ]

// hangs up
// console.log(bestSum(421, [2, 3]));


const bestSumMemo = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) {
    return memo[targetSum];
  }

  if (targetSum === 0) {
    return [];
  }

  if (targetSum < 0) {
    return null;
  }

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSumMemo(remainder, numbers, memo);

    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination;
      }
    }
  }

  if (shortestCombination !== null) {
    memo[targetSum] = shortestCombination;
    return memo[targetSum];
  }

  memo[targetSum] = null;

  return null;
};

console.log(bestSumMemo(421, [2, 3]));