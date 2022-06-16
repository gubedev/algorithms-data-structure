function twoNumberSum(array, targetSum) {
  // Sort the array and iterate it with one pointer at each extreme
  // At each iteration, check if the sum of the two pointers is bigger or smaller than the target
  // If it's bigger, move the right pointer to the left
  // If it's smaller, move the left pointer to the right
  let sortedArray = array.sort((a, b) => a - b);
  let leftLimit = 0;
  let rightLimit = sortedArray.length - 1;

  while (leftLimit < rightLimit) {
    const currentSum = sortedArray[leftLimit] + sortedArray[rightLimit];

    if (currentSum === targetSum)
      return [sortedArray[leftLimit], sortedArray[rightLimit]];
    else currentSum < targetSum ? leftLimit++ : rightLimit--;
  }

  return [];
}

console.log(twoNumberSum([9, 1, 3, 4, 5], 6)); // [1,5]
console.log(twoNumberSum([1, 2, 3, 4, 5], 10)); // []
