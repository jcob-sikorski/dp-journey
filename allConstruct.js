// write a fn allConstruct(target, wordBank) that accepts
// a target string and an array of strings.

// the fn should return a 2D array containing all of
// the ways that the target can be constructed by
// concatenating elements of the wordBank array

// you may reuse elements of wordBank as many times as needed

const allConstruct = (target, wordBank) => {
  if (target === '') return [[]];

  const result = [];

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank);
      const targetWays = suffixWays.map(way => [word, ...way]);
      result.push(...targetWays);
    }
  }

  return result;
};

console.log(allConstruct('abc', ['abc', 'a', 'b', 'c']));
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));

// m - target length
// n - wordBank length

// *** Brute force: ***
// 
// time complexity: O(n^m)

// space complexity: O(m)