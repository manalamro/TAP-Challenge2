const missingNumber=(nums)=>{
    let n = nums.length;
    console.log("nums befor sorting:"+nums);
    //since our array items number has a range from [0,n]
    // and 0 <= nums[i] <= n ,it means that num[i]=i so that when num[i]=0 when i=0, and so on for other items. 
    //so we should sort the input array from zero and the item value increases incrementally with one increment.
    nums.sort(function(a,b){
        return(a-b);
    });
    console.log("nums after sorting:"+nums);
    console.log("length of array:"+n);
    for(let i=0; i<=n; i++){
        if(nums[i] != i){
           return console.log(i);
        }
        //if the missin number is n value;
        if(n == i){
            return console.log(i);
          } 
    }
    return -1;
} 

let nums = [9,6,4,2,3,5,7,0,1]
missingNumber(nums);