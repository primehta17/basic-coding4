//total sum in matrix

let arr=[[13,2,3],[4,5,6],[7,8,9]];
let sum=0;
for(let i=0;i<arr.length;i++){
   for(let j=0;j<arr[i].length;j++){
    sum+=arr[i][j];
   }
}
console.log(sum);