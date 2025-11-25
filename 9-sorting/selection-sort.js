function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // Assume current position has smallest

    // Find the actual smallest in remaining array
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // Found a new smallest!
      }
    }

    // Swap if we found a smaller element
    if (i !== minIndex) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

const myArr = [4, 2, 6, 5, 1, 3];
const res = selectionSort(myArr);
console.log(res);

// First Pass - Find smallest, put in position 0:
// Look through ALL numbers: [4, 2, 6, 5, 1, 3]
// Smallest is 1 at position 4
// Swap with position 0: [1, 2, 6, 5, 4, 3]
// ✅ 1 is now in correct position!

// Second Pass - Find next smallest, put in position 1:
// Look from position 1 onward: [2, 6, 5, 4, 3]
// Smallest is 2 at position 1 (already correct!)
// No swap needed: [1, 2, 6, 5, 4, 3]
// ✅ 2 is now in correct position!

// Third Pass - Find next smallest, put in position 2:
// Look from position 2 onward: [6, 5, 4, 3]
// Smallest is 3 at position 5
// Swap with position 2: [1, 2, 3, 5, 4, 6]
// ✅ 3 is now in correct position!

// Fourth Pass - Find next smallest, put in position 3:
// Look from position 3 onward: [5, 4, 6]
// Smallest is 4 at position 4
// Swap with position 3: [1, 2, 3, 4, 5, 6]
// ✅ 4 is now in correct position!

// Fifth Pass - Find next smallest, put in position 4:
// Look from position 4 onward: [5, 6]
// Smallest is 5 at position 4 (already correct!)
// No swap needed: [1, 2, 3, 4, 5, 6]
// ✅ Done!
