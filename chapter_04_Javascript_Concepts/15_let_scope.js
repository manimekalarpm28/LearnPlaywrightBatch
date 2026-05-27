// Example of block scope using let
let value = 10;
console.log(value); // Output: 10

if (true) {
    let value = 20; // block-scoped variable
    console.log(value); // Output: 20
}

console.log(value); // Output: 10

// Example showing let inside a function and block
function letScopeExample() {
    let result = 100;
    console.log("result before if:", result); // Output: 100

    if (true) {
        let result = 200; // new variable inside the if block
        console.log("result inside if:", result); // Output: 200
    }

    console.log("result after if:", result); // Output: 100
}

letScopeExample();

// Example where the function scope variable should remain var
function var_func_scope() {
    var count = 1; // keep this as var only
    console.log("count start:", count); // Output: 1

    if (true) {
        var count = 2; // still same function-scoped variable
        console.log("count inside if:", count); // Output: 2
    }

    console.log("count end:", count); // Output: 2
}

var_func_scope();
