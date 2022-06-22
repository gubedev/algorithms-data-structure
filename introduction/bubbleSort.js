const arr = [3, 2, 1, 4, 6, 5, 7, 9, 8, 10];

const bubbleSort = (arr) => {
  // set a flag variable
  let noSwaps;

  // We will have a nested loop
  // with a pointer iterating from right to left
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    // and another iterating from left to right
    for (let j = 0; j < i - 1; j++) {
      // We compare the two pointers
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
};

bubbleSort(arr);
console.log(arr); // [1,2,3,4,5,6,7,8,9,10]


