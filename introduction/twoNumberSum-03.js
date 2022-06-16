function twoNumberSum(array, targetSum) {
  // Iterate over array once, and at each iteration
  // check if the number you need to get to ther target exists in the array
  // If it exists, return its index and the present number index
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let desiredNumber = targetSum - array[i];
    if (
      array.indexOf(desiredNumber) !== -1 &&
      array.indexOf(desiredNumber) !== i
    ) {
      result.push(array[i]);
      result.push(array[array.indexOf(desiredNumber)]);
      break;
    }
  }

  return result;
}

console.log(twoNumberSum([9, 1, 3, 4, 5], 6)); // [1,5]
console.log(twoNumberSum([1, 2, 3, 4, 5], 10)); // []
