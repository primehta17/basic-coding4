//how many times it there

let arr=[9,33,4,33,21,33,33,33];
function distinctnum(arr){
    let seen={};
    for(let i=0;i<arr.length;i++){
        let abc=arr[i];
        if(seen[abc]==undefined){
            seen[abc]=1;
        }else   {
            seen[abc]++;
        }
        
    }
    return seen;
}
console.log(distinctnum(arr));

