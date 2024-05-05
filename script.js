const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
 let ans = [];
  let sum = 0;
  let z = 0; // Initialize z to 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > n) {
      ans.push(arr.slice(z, i)); // Slice from z to i (exclusive)
      z = i; // Update z for the next subarray
      sum = arr[i]; // Reset sum with the current element
    }
  }
  // Push the last subarray if there are remaining elements
  if (z < arr.length) {
    ans.push(arr.slice(z)); // Slice from z to the end of the array
  } 
  arr=[...ans];
	return arr;
	  
};
  
const n = prompt("Enter n: ");  
alert(JSON.stringify(divide(arr, n)));   
