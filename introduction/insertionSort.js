const arr = [3, 2, 1, 4, 6, 5, 7, 9, 8, 10];

const insertionSort = (arr) => {
  let currentVal;

  for (let i = 0; i < arr.length; i++) {
    currentVal = arr[i];

    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
        arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentVal;
  }

  return arr;
};

insertionSort(arr);
console.log(arr); // [1,2,3,4,5,6,7,8,9,10]
