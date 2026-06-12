let results=["pass","Fail","pass","error","Fail"];



 console.log(results.indexOf("Fail"));
  console.log(results.indexOf("Skip"));
   console.log(results.lastIndexOf("Fail"));

console.log( results.includes("skip"));

let nums=[10,20,30,40,50];
let greater20=nums.find(x => x>=20);
console.log(greater20);

console.log(nums.findIndex(n => n>20));
console.log(nums.findLast(n => n>20));
console.log(nums.findLastIndex(n => n>20));




