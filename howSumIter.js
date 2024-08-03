//     0     1     2     3     4     5     6     7
// [[], null, null, [3], null, [5], [3, 3], [3, 4]]

const howSumIter = (targetNum, seq) => {
  const array = Array(targetNum + 1).fill(null);
  array[0] = [];

  for (let i = 0; i <= targetNum; i++) {
    if (array[i] !== null) {
      for (let num of seq) {
        if (i + num <= targetNum) {
          if (array[i + num] === null) {
            array[i + num] = [...array[i], num];
          }
        }
      }
    }
  }

  return array[targetNum];
};