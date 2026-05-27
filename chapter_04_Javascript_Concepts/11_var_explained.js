var a=20;
console.log(a); // Output: 20

function sayHello() {
    console.log("Hello, World!");
    var a=30; // This 'a' is different from the global 'a'
    console.log(a); // Output: 30
if (true) {
    var a=40;
    console.log(a); // Output: 40
}}

sayHello();
console.log(a); // Output: 20 (global 'a' is unchanged)

//var is function-scoped, so it can be accessed outside the block it was declared in

