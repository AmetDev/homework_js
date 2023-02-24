//0(1) - const
arr = [1,2,3,4,5,6,7,8]
function getLastElement(arr){
	return arr[arr.length-1];
};

console.log(getLastElement(arr));

//O(n)=линейная сложность зависит от количества элементов 
function getSumOfArray(arr){
	let sum = 0;
	for(let i =0; i<arr.length;i++){
		sum += arr[i]
	}
	return sum;
}

console.log(getSumOfArray(arr));

