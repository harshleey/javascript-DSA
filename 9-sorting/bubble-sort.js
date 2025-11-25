function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        console.log("Left:", arr[j]);
        console.log("Right:", arr[j + 1]);
        let temp = arr[j]; // Step 1: Save left value (4) in temporary storage
        arr[j] = arr[j + 1]; // Step 2: Put right value (2) into left position
        arr[j + 1] = temp; //  Step 3: Put saved left value (4) into right position
      }
    }
  }

  return arr;
}

const myArr = [4, 2, 6, 5, 1, 3];
const res = bubbleSort(myArr);
console.log(res);

// First Pass - Bubble the largest number to the end:
// Compare 4 and 2 → 4 > 2? YES → Swap them: [2, 4, 6, 5, 1, 3]
// Compare 4 and 6 → 4 > 6? NO → No swap: [2, 4, 6, 5, 1, 3]
// Compare 6 and 5 → 6 > 5? YES → Swap them: [2, 4, 5, 6, 1, 3]
// Compare 6 and 1 → 6 > 1? YES → Swap them: [2, 4, 5, 1, 6, 3]
// Compare 6 and 3 → 6 > 3? YES → Swap them: [2, 4, 5, 1, 3, 6]

// Second Pass - Bubble the next largest:
// [2, 4, 5, 1, 3, 6] → Compare neighbors and swap when needed
// Result: [2, 4, 1, 3, 5, 6] (5 is now in correct position)

// Third Pass:
// [2, 4, 1, 3, 5, 6] → Result: [2, 1, 3, 4, 5, 6] (4 is now correct)

// Fourth Pass:
// [2, 1, 3, 4, 5, 6] → Result: [1, 2, 3, 4, 5, 6] (2 and 3 are now correct)
