function twoNumberSum(array, targetSum) {
  let result = [];
  // We use a nested loop to test every possible combination of numbers within the array
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      // If we find the right combination, we push both values into the result array and return it
      if (array[i] + array[j] === targetSum) {
        result.push(array[i]);
        result.push(array[j]);
        return result;
      }
    }
  }
  // Return the result array
  return result;
}

console.log(twoNumberSum([9, 1, 3, 4, 5], 6)); // [1,5]
console.log(twoNumberSum([1, 2, 3, 4, 5], 10)); // []
