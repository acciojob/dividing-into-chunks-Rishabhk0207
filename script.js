const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
 let ans = [];
  let sum = 0;
  let z = 0; 
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > n) {
      ans.push(arr.slice(z, i)); 
      z = i;
      sum = arr[i]; 
  }

  if (z < arr.length) {
    ans.push(arr.slice(z)); 
  }
  return ans;
	 
};
  
const n = prompt("Enter n: ");  
alert(JSON.stringify(divide(arr, n)));  
