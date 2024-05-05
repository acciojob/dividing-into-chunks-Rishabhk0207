const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let ans=[];
	for(let i=0;i<arr.length;i++){
		let sum=arr[i];
		for(let j=i+1;j<arr.length,j++){
			sum +=arr[j];
			if(sum>n){
				ans.push(arr.slice(i,j);
				break;
			}
		}
	}
	return ans;
	
};
  
const n = prompt("Enter n: "); 
alert(JSON.stringify(divide(arr, n)));
