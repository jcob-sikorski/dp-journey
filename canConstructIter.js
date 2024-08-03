const canConstructIter = (target, wordBank) => {
  const table = Array(target + 1).fill(false);

  table[0] = true;

  for (let i = 0; i <= target.length; i++) {
    if (array[i] === true) {
      for (let word of wordBank) {
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] = true;
        }
      }
    }
  }

  return table[target.length];
};

console.log(canConstructIter(7, [5, 3, 4]));