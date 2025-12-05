// 1. Print "Hello, World!" to the console.
let message = "Hello, World!";
console.log(message);

// 2. Declare a variable name and assign it your name. Print the variable.
let name = "Alice";
console.log(name);

// 3. Create two variables, a and b, assign them numbers, and print their sum.
let a = 5;
let b = 10;
console.log(a + b);

// 4. Write a program to find the length of a string stored in a variable str.
let str = "Hello";
console.log(str.length);

// 5. Create a variable num and check if it is even or odd.
let num = 7;
if (num % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 6. Write a program to calculate the area of a rectangle given length and width.
let length = 5;
let width = 10;
console.log(length * width);

// 7. Create a function greet that accepts a name as a parameter and returns "Hello, [name]!"
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// 8. Write a program to convert temperature from Celsius to Fahrenheit.
let celsius = 30;
let fahrenheit = (celsius * 9) / 5 + 32;
console.log(fahrenheit);

// 9. Create a function to find the maximum of three numbers.
function maxOfThree(a, b, c) {
  return Math.max(a, b, c);
}
console.log(maxOfThree(3, 9, 6));

// 10. Write a program that checks if a string is a palindrome.
let data = "madam";
let isPalindrome = data == data.split(" ").reverse().join(" ");
console.log(isPalindrome);

// 11. Declare an array of five colors and print the first and last colors.
let colors = ["red", "blue", "green", "yellow", "purple"];
console.log(colors[0]);
console.log(colors[colors.length - 1]);

// 12. Create a function that reverses a string.
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

// 13. Write a program to sum all elements in an array.
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((sum, curr) => sum + curr, 0);
console.log(sum);

// 14. Create an object student with properties name, age, and grade. Access and print each property.
let student = {
  name: "John",
  age: 20,
  grade: "A",
};
console.log(student.name);
console.log(student.age);
console.log(student.grade);

// 15. Write a function to calculate the factorial of a number.
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));

// 16. Write a program to check if a number is prime.
function isPrime(num) {
  // A prime number is a number that is only divisible by 1 and itself
  if (num <= 1) return false;
  else {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
  }
  return true;
}
console.log(isPrime(11));

// 17. Create a function to count the number of vowels in a given string.
function countVowels(str) {
  let count = 0;
  let newStr = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (
      newStr[i] == "a" ||
      newStr[i] == "e" ||
      newStr[i] == "i" ||
      newStr[i] == "o" ||
      newStr[i] == "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("hello"));

// 18. Write a program to remove duplicates from an array.
let newNumbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = new Set(newNumbers);
console.log(Array.from(uniqueNumbers));

// 19. Create an array of numbers and sort them in ascending order.
let unsortedNumbers = [5, 2, 9, 1, 5, 6];
let sortedNumbers = unsortedNumbers.sort((a, b) => a - b);
console.log(sortedNumbers);

// 20. Write a program to find the index of a given element in an array.
// Find index of a given element in an array
let array = [10, 20, 30, 40, 50];
let element = 20;
let index = array.findIndex((num, index) => num == element);
console.log(index);

// 21. Create a function that returns the square of each number in an array.
function squareArray(numbers) {
  return numbers.map((num) => num ** 2);
}
console.log(squareArray([1, 2, 3, 4, 5]));

// 22. Write a function to capitalize the first letter of each word in a string.
function capitalizeWords(str) {
  return str
    .split(" ")
    .map((value) => value[0].toUpperCase() + value.slice(1).toLowerCase())
    .join(" ");
}
console.log(capitalizeWords("hello world"));

// 23. Create a program to merge two arrays and remove duplicates.
let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
let mergedArray = [...array1, ...array2];
console.log(Array.from(new Set(mergedArray)));

// 24. Write a program to find the second largest number in an array.
let arrayNumbers = [10, 5, 8, 12, 7];
let uniqueNumbersQuery = arrayNumbers.sort((a, b) => a - b);
console.log(uniqueNumbersQuery[arrayNumbers.length - 2]);

// 25. Create a function that checks if all elements in an array are equal.
function allEqual(array) {
  const first = array[0];

  return array.every((num, index) => num == first);
}
console.log(allEqual([5, 5, 4, 5]));

// 26. Write a program to generate a random number between 1 and 100.
let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

// 27. Create a function that takes an array and returns the largest and smallest elements.
function findMinMax(arr) {
  return { min: Math.min(...arr), max: Math.max(...arr) };
}
console.log(findMinMax([3, 7, 1, 9, 4]));

// 28. Write a program to create a countdown from 10 to 1
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// 29. Create a function that removes all falsy values (false, 0, "", null, undefined, NaN) from an array.
function removeFalsy(arr) {
  return arr.filter((num, index) => num >= 1);
  // let result = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if(!arr[i])
  // }
}

console.log(removeFalsy([0, 1, false, 2, "", 3, null, undefined, NaN]));

// 30. Write a program that calculates the sum of squares of numbers from 1 to n.
function sumOfSquares(n) {
  // let result = 0;
  // for (let i = 1; i <= n; i++) {
  //   result += i ** 2;
  // }
  // return result;
}
console.log(sumOfSquares(3));
