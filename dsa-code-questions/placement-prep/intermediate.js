// 1. Write a function to find the second smallest number in an array.
// My solution
function secondSmallest(arr) {
  // Pseudocode
  // 1. Sort the array in an ascending order
  // 2. Pick the figure in index 1
  let sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[1];
}
console.log(secondSmallest([4, 2, 9, 7, 5]));

// Their solution
function newSecondSmallest(arr) {
  // Correction: Remove duplicates before sorting
  let sortedArr = [...new Set(arr)].sort((a, b) => a - b);
  return sortedArr[1];
}
console.log(newSecondSmallest([4, 2, 2, 9, 7, 5]));

// 2. Create a function to find the unique elements in an array of numbers.
// Mine
function uniqueElements(arr) {
  // Use Set to remove the duplicates in the array and return it
  return [...new Set(arr)];
}
console.log(uniqueElements([1, 2, 3, 2, 4, 1, 5]));
// Theirs: Same solution

// 3. Create a function to convert a string to "snake_case" format.
// Mine
function toSnakeCase(str) {
  // Convert to lower case then an array then join back with an underscore
  return str.toLowerCase().split(" ").join("_");
}
console.log(toSnakeCase("JavaScript Is Fun"));
// Theirs: Regex
// return str.toLowerCase().replace(/\s+/g, '_');

// 4. Write a program to find the longest word in a sentence.
// Mine
function longestWord(sentence) {
  //   let length = Math.max(...sentence.split(" ").map((word) => word.length));
  //   return sentence.split(" ").find((word) => word.length == length);

  //   Their solution
  let words = sentence.split(" ");
  return words.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );
}
console.log(longestWord("Coding is a wonderful experience"));

//  5. Implement a function that checks if a given string is an anagram of another string.
function areAnagrams(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}
console.log(areAnagrams("listen", "silent"));

// 6. Create a function to sort an array of objects by a given property.
function sortByProperty(arr, property) {
  // Use the array sort method
  //   return arr.map((object) => object[property]);
  return arr.sort((a, b) => a[property] - b[property]);

  //   Their solution: same
}
let data = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];
console.log(sortByProperty(data, "age"));

//  7. Write a function to capitalize the first and last letters of each word in a string.
function capitalizeFirstLast(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(
      (word) =>
        word[0].toUpperCase() +
        word.slice(1, word.length - 1) +
        word[word.length - 1].toUpperCase()
    )
    .join(" ");

  // Their solution
  /* return str.split(' ').map(word =>
   word[0].toUpperCase() + word.slice(1, -1) + word.slice(-1).toUpperCase()
   ).join(' '); */
}
console.log(capitalizeFirstLast("hello world"));

// 8. sCreate a function to remove all occurrences of a specific element from an array.
function removeElement(arr, element) {
  return arr.filter((num) => num != element);
}
console.log(removeElement([1, 2, 3, 2, 4, 2], 2));

// 9. Create a function to find all pairs in an array that add up to a specific target.
function findPairs(arr, target) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        result.push([arr[i], arr[j]]);
      }
    }
  }

  return result;
}
console.log(findPairs([1, 2, 3, 4, 5], 6));

// 10. Write a function that returns true if a given number is a palindrome.
function isPalindrome(num) {
  return num.toString().split("").reverse().join("") == num;
}
console.log(isPalindrome(341));

// Write a function that returns the nth Fibonacci number.
function fibonacci(n) {
  return n;
}
// console.log(fibonacci(5));

//  Create a function to calculate the greatest common divisor (GCD) of two numbers.
function gcd(a, b) {}
// console.log(gcd(48, 18));

// Write a program to count the occurrences of each character in a string.
function countCharacters(str) {}
// console.log(countCharacters("hello"));
// { h: 1, e: 1, l: 2, o: 1 }

// Create a function that accepts a string and returns a new string with vowels removed.
function removeVowels(str) {}
// console.log(removeVowels("javascript"));
// jvscrpt

// Write a program to flatten a nested array (e.g., [1, [2, [3, 4]], 5] should become [1, 2, 3, 4, 5]).
function flattenArray(arr) {
  return arr.flat(Infinity);
}
console.log(flattenArray([1, [2, [3, 4]], 5]));

// 6 Write a function to calculate the sum of all prime numbers up to a given number.
function sumPrimes(num) {
  let result = [];
  if (num <= 1) return 0;
  else {
    for (let i = 2; i < num; i++) {
      for (let j = i + 1; j < num; j++) {
        if (j % i == 0) {
          result.push(i);
        }
      }
    }
  }

  console.log(result);
  return result.reduce((sum, curr) => sum + curr, 0);
}
// console.log(sumPrimes(10));
