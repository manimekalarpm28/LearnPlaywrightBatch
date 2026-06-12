let a=[1,2];
let b=[3,4];
let c=a+b;

console.log(c);

console.log("------------");

let d=a.concat(b);
console.log(d);

let e=[...a,...b];
console.log(e);

let s=["pass","Fail","Skip"].join(" , ");
console.log(s);

console.log([80,60,85].some(s => s < 70));


console.log([80,90,85].some(s => s < 70));



