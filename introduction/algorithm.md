# What is an algorithm?
 Is a finite sequence of rigorous instructions, typically used to solve a class of specific problems or to perform a computation. Algorithms are used as specifications for performing calculations and data processing.



## An example could be a recipe for cooking bread:


```
1- Mix flower, salt, water and yeast
2- Let the dough rise
3- Put in the oven for 30'
4- Let chill and enjoy
```

## An algorithm to identify if a word is a palindrome or not could be:


```
function isPalindrome(word) {
	// Step 1 - Put a pointer at each extreme of the word
    // Step 2 - Iterate the string "inwards"
	// Step 3 - At each iteration, check if the pointers represent equal values
	// If this condition isn't accomplished, the word isn't a palindrome
    let left = 0
    let right = word.length-1

    while (left < right) {
        if (word[left] !== word[right]) return false
        left++
        right--
    }
    
    return true
}

isPalindrome("neuquen") // true
isPalindrome("Buenos Aires") // false
```

# Algorithmic complexity

Now that we know what an algorithm is, let's learn how to compare different algorithms against each other.

Let's say we're presented this problem:

```
Write a function that takes two parameters: A non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the array sum up to the target sum, the function should return them in an array. If no two numbers sum up to the target sum, the function should return an empty array.
```

This could be a valid solution to the problem:

Example 1:

```
function twoNumberSum(array, targetSum) {
    let result = []
    // We use a nested loop to test every possible combination of numbers within the array
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            // If we find the right combination, we push both values into the result array and return it
            if (array[i] + array[j] === targetSum) {
                result.push(array[i])
                result.push(array[j])
                return result
            }
        }
    }
    // Return the result array
    return result
}

console.log(twoNumberSum([9,1,3,4,5], 6)) // [1,5]
console.log(twoNumberSum([1,2,3,4,5], 10)) // []
```
This could be another valid solution:


Example 2:

```
function twoNumberSum(array, targetSum) {
	// Sort the array and iterate it with one pointer at each extreme
	// At each iteration, check if the sum of the two pointers is bigger or smaller than the target
	// If it's bigger, move the right pointer to the left
	// If it's smaller, move the left pointer to the right
	let sortedArray = array.sort((a,b) => a-b)
	let leftLimit = 0
	let rightLimit = sortedArray.length-1

	while (leftLimit < rightLimit) {
		const currentSum = sortedArray[leftLimit] + sortedArray[rightLimit]

		if (currentSum === targetSum) return [sortedArray[leftLimit], sortedArray[rightLimit]]
		else currentSum < targetSum ? leftLimit++ : rightLimit--        
	}

	return []
}

console.log(twoNumberSum([9,1,3,4,5], 6)) // [1,5]
console.log(twoNumberSum([1,2,3,4,5], 10)) // []

```

And this could be yet another valid solution:


Example 3:

```

function twoNumberSum(array, targetSum) {
    // Iterate over array once, and at each iteration
    // check if the number you need to get to ther target exists in the array
    // If it exists, return its index and the present number index
	let result = []

	for (let i = 0; i < array.length; i++) {
        let desiredNumber = targetSum - array[i]
        if (array.indexOf(desiredNumber) !== -1 && array.indexOf(desiredNumber) !== i) {
            result.push(array[i])
            result.push(array[array.indexOf(desiredNumber)])
            break
        }
	}

    return result
}

console.log(twoNumberSum([9,1,3,4,5], 6)) // [1,5]
console.log(twoNumberSum([1,2,3,4,5], 10)) // []

```

So how can we compare which solution is better? They all accomplish their goal, right?

But besides effectiveness (whether the goal is achieved or not), we should also evaluate algorithms in terms of efficiency, meaning which solves the problem using the smallest amount of resources in terms of time (processing time) and space (memory usage).

An automatic thought that comes up when first thinking about this is, "Just measure how long it takes the algorithm to run". And that's valid.

But the problem is the same algorithm might take longer or shorter on a different computer given its hardware and configuration. And even in the same computer it might take longer or shorter to run given the background tasks you got running at that given moment.

What we need is an objective and invariable way of measuring an algorithm's performance, and that's exactly what asymptotic notation is for.

Asymptotic notation (also called **Big O notation**) is a system that allows us to **analyze and compare the performance of an algorithm as its input grows**.

Big O is a standardized method to analyze and compare the complexity (in terms of runtime and space) of different algorithms. The big O complexity of an algorithm will always be the same no matter what computer you “calculate it” in, because the complexity is calculated on **how the number of operations of the algorithm varies when the input varies**, and that relationship always stays the same no matter the environment.

There're are a lot of different possible complexities an algorithm can have, but the most common ones are the following:


**Constant — O(1):** When the number of operations/space required is always the same independently from the input. Take for example a function that takes a number as input and returns that number minus 10. No matter if you give it 100 or 1000000 as input, that function will always perform a single operation (rest 10), so the complexity is constant O(1).

**Logarithmic — O(log n):** When the number of operations/space required grows at an increasingly slower rate compared to the growth of the input. This type of complexity is often found in algorithms that take a divide and conquer approach or in search algorithms. The classic example is binary search, in which the dataset you have to go through continually halves until you reach the final result.

**Linear —O(n):** When the number of operations/space required grow at the same rate as the input. Take for example a loop that prints every single value found in an array. The number of operations will grow together with the length of the array, so the complexity is linear O(n).

**Quadratic — O(n²):** When the number of operations/space required grow at the power of two regarding to the input. Nested loops are the classic example for this one. Imagine we have a loop that iterates through an array of numbers, and within that loop we have another one that iterates the whole array again. For every value in the array we’re iterating over the array twice, so the complexity is quadratic O(n²).

A graphic representation of classic algorithm complexities:

![Alt text](big-o-notation-complexity-chart.png?raw=true "Title")


Note that the same notation is used when talking about both time and space complexity. Say for example we have a function that always creates an array with a single value no matter the input it receives, then the space complexity will be constant O(1), and so on with the other complexity types.

In the Example 1 the complexity is **O(n^2)**, because a nested array iteration.

In the Example 2 the complexity is **O(n log n)**, because order task is log n and then iterating once.

In the Example 3 the complexity is **O(n)**, because iterating once.

# Searching algorithms

Once you have a good understanding about algorithmic complexity, the next good thing to know are popular algorithms used to solve very common programming tasks. So let's start with searching.

When searching for a value in a data structure, there are different approaches we can take. We'll take a look at two of the most used options and compare them.

## Linear search

Linear search consists of iterating over the data structure one value at a time and checking if that value is the one we’re looking for. It’s probably the most intuitive kind of search and the best we can do if the data structure we’re using isn’t ordered.

Let’s say we have an array of numbers and for this array we want to write a function that takes a number as the input and returns that number’s index in the array. In case it doesn’t exist in the array, it will return -1. A possible approach could be the following:

```

const arr = [1,2,3,4,5,6,7,8,9,10]

const search = num => {
    for (let i = 0; i < arr.length; i++) {
        if (num === arr[i]) return i
    }
    return -1
}

console.log(search(6)) // 5
console.log(search(11)) // -1

```

As the array isn’t ordered, we don’t have a way of knowing the approximate position of each value, so the best we can do is check one value at a time. The complexity of this algorithm is linear - O(n) since in the worst case scenario we will have to iterate over the whole array once to get the value we’re looking for.

Linear search is the approach used by many built-in JavaScript methods like indexOf, includes, and findIndex.


## Binary search

When we have an ordered data structure, there’s a much more efficient approach we can take, binary search. What we do in binary search is the following:

- Select the middle value of our data structure and “ask”, is this the value we’re looking for?
- If not, we “ask” whether the value we’re looking for is greater or less than the middle value?
- If it’s greater, we “discard” all the values smaller than the mid value. If - it’s smaller, we “discard” all the values greater than the mid value.
And then we repeat the same operation until we find the given value or the remaining "piece" of the data structure can't be divided anymore.

![Alt text](binary-search.png?raw=true "Title")

What's so cool about binary search is that in each iteration we're discarding roughly half of the data structure. This makes search really quick and efficient. 👌

Let’s say we have the same array (ordered) and we want to write the same function as before, which takes a number as the input and returns that number’s index in the array. In case it doesn’t exist in the array, it will return -1. A binary search approach could be the following:

```

const arr = [1,2,3,4,5,6,7,8,9,10]

const search = num => {
    // We'll use three pointers.
    // One at the start of the array, one at the end and another at the middle.
    let start = 0
    let end = arr.length-1
    let middle = Math.floor((start+end)/2)

    // While we haven't found the number and the start pointer is equal or smaller to the end pointer
    while (arr[middle] !== num && start <= end) {
        // If the desired number is smaller than the middle, discard the bigger half of the array
        if (num < arr[middle]) end = middle - 1
        // If the desired number is bigger than the middle, discard the smaller half of the array
        else start = middle + 1
        // Recalculate the middle value
        middle = Math.floor((start+end)/2)
    }
    // If we've exited the loop it means we've either found the value or the array can't be devided further
    return arr[middle] === num ? middle : -1
}

console.log(search(6)) // 5
console.log(search(11)) // -1

```

This approach may seem like “more code” at first, but potential iterations are actually a lot less than in linear search, and that’s because in each iteration we’re discarding roughly half of the data structure. The complexity of this algorithm is **Logarithmic — O(log n):**

# Sorting algorithms

When sorting data structures, there are many possible approaches we can take. Let’s take a look at some of the most used options and compare them.

## Bubble sort

Bubble sort iterates through the data structure and compares one pair of values at a time. If the order of those values is incorrect, it swaps its positions to correct it. The iteration is repeated until the data is ordered. This algorithm makes bigger values “bubble” up to the end of the array. 

This algorithm has a **Quadratic – O(n²)** complexity since it will compare each value with the rest of the values one time.

![Alt text](bubble-sort.png?raw=true "Title")

A possible implementation could be the following:

```
const arr = [3,2,1,4,6,5,7,9,8,10]

const bubbleSort = arr => {
    // set a flag variable
    let noSwaps
	
    // We will have a nested loop
    // with a pointer iterating from right to left
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true
		// and another iterating from right to left
        for (let j = 0; j < i-1; j++) {
            // We compare the two pointers
            if (arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false
            }
        }
        if (noSwaps) break
    }
}

bubbleSort(arr)
console.log(arr) // [1,2,3,4,5,6,7,8,9,10]

```

## Selection sort

Selection sort is similar to bubble sort but instead of placing the bigger values at the end of the data structure, it focuses on placing the smaller values at the beginning. The steps it takes are the following:

- Store the first item of the data structure as the minimum value.
- Iterate through the data structure comparing each value with the minimum value. If a smaller value is found, it identifies this value as the new minimum value.
- If the minimum value isn’t the first value of the data structure, it swaps the positions of the minimum value and the first value.
- It repeats this iteration until the data structure is ordered.
- This algorithm has a **Quadratic – O(n²)** complexity.

![Alt text](selection-sort.png?raw=true "Title")

A possible implementation could be the following:

```

const arr = [3,2,1,4,6,5,7,9,8,10]

const selectionSort = arr => {
    
    for (let i = 0; i < arr.length; i++) {
        let lowest = i
        
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j
            }
        }

        if (i !== lowest) {
            let temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }
    }
}

selectionSort(arr)
console.log(arr) // [1,2,3,4,5,6,7,8,9,10]

```

## Insertion sort

Insertion sort orders the data structure by creating an “ordered half” that is always correctly sorted, and iterates through the data structure picking each value and inserting it in the ordered half exactly in the place it should be.

The steps it takes are the following:

- It starts by picking the second element in the data structure.
- It compares this element with the one before it and swap its positions if necessary.
- It continues to the next element and if it’s not in the right position, it iterates through the “ordered half” to find its correct position and inserts it there.
- It repeats the same process until the data structure is sorted.
- This algorithm has a **Quadratic (O(n²))** complexity.

![Alt text](insertion-sort.png?raw=true "Title")

A possible implementation could be the following:



```

const arr = [3,2,1,4,6,5,7,9,8,10]

const insertionSort = arr => {
    let currentVal
    
    for (let i = 0; i < arr.length; i++) {
        currentVal = arr[i]

        for (var j = i-1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        
        arr[j+1] = currentVal
    }
    
    return arr
}

insertionSort(arr)
console.log(arr) // [1,2,3,4,5,6,7,8,9,10]

```