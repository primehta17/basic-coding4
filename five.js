//target in subarray

let arr = [1, 10, 4, 0, 3, 5], target = 7
function subtarget(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i]+arr[j]==target){
                return `${i},${j}`
            }
        }
    }
    return -1;
}
console.log(subtarget(arr));
