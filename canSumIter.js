// in it table with default values for 7:
//  0  1  2  3  4  5  6  7
// [F, F, F, F, F, F, F, F]

//         |
//         |
//         |
//      \     /
//       \   /.
//        \ /

// we set the first value to true bc
// canSum(0, [...]) -> true
// [T, F, F, F, F, F, F, F]


const canIter = (targetNum, seq) => {
  const array = Array(targetNum + 1).fill(false);

  array[0] = true;

  for (let i = 0; i <= targetNum; i++) {
    for (let j = 0; j <= seq.length; j++) {
      if (i + seq[j] <= targetNum) array[i+seq[j]] = true;
    }
  }
  console.log(array);
};

canIter(7, [5, 3, 4]);

// after working through the problem according to
// tabulation-recipe.txt let's analyze complexity:


// m = target sum
// n = seq length
//    time O(m*n)
//    space O(m)