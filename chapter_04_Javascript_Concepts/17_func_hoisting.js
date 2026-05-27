// Function Hoisting Example
// In JavaScript, function declarations are hoisted to the top of their scope.

// This call works even though the function is defined later in the file.
printGreeting();

function printGreeting() {
    console.log("Hello from hoisted function!");
}

// Variable hoisting with var
console.log("Value of x before declaration:", x); // Output: undefined
var x = 10;
console.log("Value of x after declaration:", x); // Output: 10

// Function expression is not hoisted in the same way
try {
    sayGoodbye();
} catch (error) {
    console.log("Error:", error.message);
}

var sayGoodbye = function() {
    console.log("Goodbye from function expression!");
};

sayGoodbye();

// Example with let/const hoisting behavior
try {
    console.log("Value of y before declaration:", y);
} catch (error) {
    console.log("Error:", error.message);
}

let y = 20;
console.log("Value of y after declaration:", y); // Output: 20
