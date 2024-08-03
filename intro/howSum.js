// write a fn howSum(targetSum, numbers) that takes in a
// targetSum and an array of numbers as args

// the fn should return return an array containing any combination
// of elements that add up to exactly the targetSum, if no such
// comb then return null

// if there are multiple combs you may return any single one

const howSum = (targetSum, numbers) => {
  if (targetSum === 0) {
    return [];
  }
  
  if (targetSum < 0) {
    return null;
  }

  for (let num of numbers) {
    const remainder = targetSum - num;
    
    // we can get the array or null
    const remainderResult = howSum(remainder, numbers);

    if (remainderResult !== null) {
      // this will take linear number of steps to copy elements
      // it will take m (targetSum) time max
      return [...remainderResult, num];
    }
  }

  return null;
};

console.log(howSum(7, [2, 3]));
// console.log(howSum(300, [7, 14]));


const howSumMemo = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) {
    return memo[targetSum];
  }

  if (targetSum === 0) {
    return [];
  }
  
  if (targetSum < 0) {
    return null;
  }

  for (let num of numbers) {
    const remainder = targetSum - num;
    
    // we can get the array or null
    const remainderResult = howSumMemo(remainder, numbers, memo);

    if (remainderResult !== null) {
      // this will take linear number of steps to copy elements
      // it will take m (targetSum) time max
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return null;
};

console.log(howSumMemo(7, [2, 3]));
console.log(howSumMemo(300, [7, 14]));
