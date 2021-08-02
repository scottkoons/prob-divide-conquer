function findRotationCount(arr) {
  let count = 0;
  while (arr[0] > arr[arr.length - 1]) {
    arr.push(arr.shift());
    count++;
  } return count;
}

module.exports = findRotationCount;


findRotationCount([15, 18, 2, 3, 6, 12]); // 2
// findRotationCount([7, 9, 11, 12, 5]); // 4
// findRotationCount([7, 9, 11, 12, 15]); // 0

