let nums=[4567, 222, 1098, 3455,7823,2222,1090,8765, 2987, 6544]
result=nums.filter((el, i)=>{return el%2==0*i})
console.log(result);let even=[]
let summ = 0

for (const num of nums) {
    if (num %2 === 0) {
        even.push(num)
    }
}
console.log(even);

// nums=nums.map(el=>el*nums)
let summa=0

for (let index = 0; index < nums.length; index++) {
   let ns=nums[index]
   summa+=parseInt(ns)
    
}
console.log(summa);

summa=nums.reduce((total,el)=>{
    return total+=parseInt(el)
},0)
console.log(summa);


for (let i = 1; i < nums.length; i++) {
    if (nums[i]%2!==0) {
        console.log(nums[i]);
    }
}


