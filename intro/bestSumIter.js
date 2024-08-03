// bestSum(7, [5, 4, 3])

//   0    1     2   3    4    5     6        7
// [[], null, null, [3], [4], [5], [3, 3], [3, 4]]

const bestSumIter = (targetNum, seq) => {
  const array = Array(targetNum + 1).fill(null);
  array[0] = [];

  for (let i = 0; i <= targetNum; i++) {
    if (array[i] !== null) {
      for (let num of seq) {
        if (i + num <= targetNum) {
          const combination = [...array[i], num];
          if (array[i + num] === null || combination.length < array[i + num].length) {
            array[i + num] = combination;
          }
        }
      }
    }
  }

  return array[targetNum];
};

console.log(bestSumIter(7, [5, 4, 3]));