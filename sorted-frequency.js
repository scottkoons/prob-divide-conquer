function sortedFrequency(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      count++;
    }
    else if (arr[i] > target && count == 0) { return -1; }
    else if (arr[i] > target) {
      return count;
    }
    else if (i == arr.length - 1 && count == 0)
      return -1;
  } return count;
}

module.exports = sortedFrequency;


sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2); // 4
// sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3); // 1
// sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1); // 2
// sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4); // -1
