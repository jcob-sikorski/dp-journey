// write a fn canConstruct(target, wordBank) that accepts
// target string and an array of strings

// the fn should return a boolean indicating whether or not
// the target can be constructed by concatenating elements of the
// wordBank array

// you may reuse elements of wordBank as many times as needed

const canConstruct = (target, wordBank) => {
  if (target === '') return true;

  for (let word of wordBank) {
    if (target.length >= word.length && target.endsWith(word)) {
      const newTarget = target.slice(0, -word.length);
      if (canConstruct(newTarget, wordBank)) {
        return true;
      }
    }
  }

  return false;
};

console.log(canConstruct('abc', ['a', 'b', 'c']));
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));

// *** Brute force: ***
// n^m - branching factor, * m - constructing newTarget
// time complexity: O(n^m * m)

// m - height of tree, m - max length of newTarget on each tree level
// space complexity: O(m*m)


const canConstructMemo = (target, wordBank, memo = {}) => {
  if (target in memo) {
    return memo[target];
  }

  if (target === '') return true;

  for (let word of wordBank) {
    if (target.length >= word.length && target.endsWith(word)) {
      const newTarget = target.slice(0, -word.length);

      if (canConstructMemo(newTarget, wordBank, memo)) {
        memo[newTarget] = true;
        return true;
      }
    }
  }

  memo[target] = false;

  return false;
};

console.log(canConstructMemo('abc', ['a', 'b', 'c']));
console.log(canConstructMemo('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));

// m - target.length
// n - wordBank.length

// *** After memoization: ***
// n  - branching factor, * m * m - constructing newTarget * searching for target in memo
// time complexity: O(n^m * m)

// m - height of tree, m - max length of newTarget on each tree level
// space complexity: O(m*m)