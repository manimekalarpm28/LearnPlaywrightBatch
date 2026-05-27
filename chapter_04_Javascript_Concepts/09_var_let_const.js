var v=10;
let a=20;
const pi=3.14;

console.log(v);
console.log(a);
console.log(pi);
var browser="chrome";
browser="firefox"; // reassigning var variable
browser="edge"; // reassigning var variable

var testcases=["login","logout","search"];

for(var i=0;i<testcases.length;i++){ 
    console.log(testcases[i]);
}

console.log("Value of i after loop: ",i); // i is accessible here due to var's function scope


function sayHello(){
    var message="Hello from function";
    console.log(message);
}
sayHello();
sayHello(); // calling the function again to demonstrate var's function scope
sayHello();