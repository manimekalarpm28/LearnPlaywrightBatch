let result =Array.isArray([1,2,3]);
console.log(result);

let result1 =Array.isArray([ ]);
console.log(result1);

let result2 =Array.isArray("a");
console.log(result2);

console.log([80,90,100].every(s=> s>=70));
console.log([80,65,100].every(s=> s>=70));

console.log([200,201,203].every(statuscode => statuscode >= 200));

