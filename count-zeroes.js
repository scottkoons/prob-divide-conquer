function countZeroes(arr) {
  let count = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] != 0) {
      return count;
    } else {
      count++;
    }
  } return count;
}

// module.exports = countZeroes;

countZeroes([1, 1, 1, 1, 0, 0]); // 2
// countZeroes([1, 0, 0, 0, 0]); // 4
// countZeroes([0, 0, 0]); // 3
// countZeroes([1, 1, 1, 1]); // 0