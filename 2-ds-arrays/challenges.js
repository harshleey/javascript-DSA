function reverseString(str) {
  // Pseudocode
  // Validate input: str must be a string
  // Convert str into an array using the split method
  // Reverse the array using the reverse method
  // Convert back into a string and return

  if (typeof str != "string") {
    return "Input must be a string";
  }

  return str.split("").reverse().join("");
}

console.log(reverseString("Yellow"));

function isPalindrome(str) {
  // Pseudocode
  // Validate input: str must be a string
  // Convert str into an array using the split method
  // Reverse the array using the reverse method
  // Convert back into a string
  // Check if the original string is exactly equal to the reversed string (this will return true or false)

  if (typeof str != "string") {
    return "Input must be a string";
  }

  const reversedStr = str.split("").reverse().join("");

  return reversedStr === str;
}

console.log(isPalindrome("hello"));

function intReversal(int) {
  // Pseudocode
  // 1. Validate input: int must be a number
  // 2. Convert int to string (toString method)
  // 3. Convert str into an array using the split method
  // 4. Reverse the array using the reverse method
  // 5. Convert back into a string using the join method
  // 6. Convert into an integer (parseInt method)
  // 7. Return the number

  if (typeof int != "number") {
    return "Input must be a number";
  }

  const reversed = int.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(int);
}

console.log(intReversal(-36));

function sentenceCapitalization(str) {
  // Pseudocode
  // 1. Validate input: str must be a string
  // 2. Convert string to an array (split method)
  // 3. Map each word on the array and convert the first letter to uppercase (toUpperCase method)
  // 4. Attach the rest of it (slice method)
  // 5. Convert back to string (join method)

  if (typeof str != "string") {
    return "Input must be a string";
  }

  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(sentenceCapitalization("hello world"));

function fizzBuzz(n) {
  // Pseudocode
  // 1. Validate input: n must be a number
  // 2. Create a loop with a conditional less than n
  // 3. Check if i is divisible by 3 and 5 print FizzBuzz (using modulus)
  // 4. Else if i is divisible by 5 print Buzz
  // 5. Else if i is divisible by 3 print Fizz
  // 6. Else print i

  if (typeof n != "number") {
    return "Input must be a number";
  }

  for (let i = 0; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);

function maxProfit(stocks) {
  // Pseudocode
  // 1. Validate input: stocks must be an array; input must be numbers
  // 2. Get the smallest number in the array (using Math.min and spread operator)
  // 3. Get the highest number in the array (using Math.max and spread operator)
  // 4. Return the difference

  if (!Array.isArray(stocks)) {
    return "Input must be an array";
  }

  if (!stocks.every((x) => typeof x == "number")) {
    return "All the input in the array must be a number";
  }
  const cheap = Math.min(...stocks);
  const expensive = Math.max(...stocks);

  return expensive - cheap;
}

console.log(maxProfit([7, 1, 5, 3, 3, 4]));

// Don't quite understand how this was derived
function maxProfitVideoMethod(stocks) {
  if (!Array.isArray(stocks)) {
    return "Input must be an array";
  }

  if (!stocks.every((x) => typeof x == "number")) {
    return "All the input in the array must be a number";
  }

  let minPrice = stocks[0];
  let maxProfit = 0;

  for (let i = 0; i < stocks.length; i++) {
    const currentPrice = stocks[i];
    minPrice = Math.min(minPrice, currentPrice);

    const potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
  }

  return maxProfit;
}

console.log(maxProfitVideoMethod([7, 1, 5, 3, 6, 4]));

function chunk(arr, size) {
  // Pseudocode
  // 1. Validate input: arr must be an array; input must be numbers; size must be a number
  // 2. Create an empty array to hold the chunks
  // 3. Set a starting index to keep track of where we are in the original array
  // 4. Loop through the original array as long as the index has not reached the end
  // 5. Add the extracted chunk to the "chunked" array
  // 6. Move the index forward by the chunk size to get to the next chunk
  // 7. Return the final array of chunks

  if (!Array.isArray(arr)) {
    return "First argument must be an array";
  }

  if (!arr.every((x) => typeof x == "number")) {
    return "All input in first argument must be a number";
  }

  if (typeof size != "number") {
    return "Second argument must be a number";
  }

  let chunked = [];
  let index = 0;

  while (index < arr.length) {
    const chunk = arr.slice(index, index + size);
    // console.log(arr);
    chunked.push(chunk);
    index += size;
  }

  return chunked;
}

console.log(chunk([3, 5, 8, 7, 9], 2));

function twoSum(arr, target) {
  const indexArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        // indexArray.push(arr.indexOf(arr[i]));
        // indexArray.push(arr.indexOf(arr[j]));
        return [i, j];
      }
    }
  }

  // return indexArray;
  return [];
}

const array = [29, 30, 2, 15, 7];
console.log(twoSum(array, 9));
