// write a fn countConstruct(target, wordBank) that accepts
// a target string and an array of string

// the fn should return the number of ways that the target
// can be constructed by concatenating elements of the wordBank
// array

// you may reuse elements of wordBank as many times you need

const countConstruct = (target, wordBank) => {
  if (target === '') return 1;

  let sum = 0;

  for (let word of wordBank) {
    if (target.length >= word.length && target.endsWith(word)) {
      const newTarget = target.slice(0, -word.length);
      const numWaysForRest = countConstructMemo(newTarget, wordBank, memo);

      sum += numWaysForRest;
    }
  }

  return sum;
};

console.log(countConstruct('abc', ['abc', 'a', 'b', 'c']));
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));

// m - target length
// n - wordBank length

// *** Brute force: ***
// 
// time complexity: O(n^m + m^2)

// space complexity: O(m*m)


const countConstructMemo = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return 1;

  let sum = 0;

  for (let word of wordBank) {
    if (target.length >= word.length && target.endsWith(word)) {
      const newTarget = target.slice(0, -word.length);
      const numWaysForRest = countConstructMemo(newTarget, wordBank, memo);

      sum += numWaysForRest;
    }
  }

  memo[target] = sum;

  return sum;
};

console.log(countConstructMemo('abc', ['abc', 'a', 'b', 'c']));
console.log(countConstructMemo('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));

// m - target length
// n - wordBank length

// *** After memoization: ***
// 
// time complexity: O(n*m*m)

// space complexity: O(m*m)