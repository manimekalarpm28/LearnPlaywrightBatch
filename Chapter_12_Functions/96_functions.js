// ============================================
// Chapter 12: Functions - Simple Examples
// ============================================

// --------- 1. Basic Function ---------
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Alice");  // Hello, Alice!


// --------- 2. Function with Return Value ---------
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log("Sum:", result);  // Sum: 8


// --------- 3. Arrow Function ---------
const multiply = (x, y) => x * y;

console.log("Multiply:", multiply(4, 6));  // Multiply: 24


// --------- 4. Function with Default Parameter ---------
function welcome(name = "Guest") {
  console.log(`Welcome, ${name}!`);
}

welcome();              // Welcome, Guest!
welcome("John");        // Welcome, John!


// --------- 5. Function with Array Parameter ---------
function sumArray(numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

let arr = [10, 20, 30, 40];
console.log("Array Sum:", sumArray(arr));  // Array Sum: 100


// --------- 6. Function with Multiple Return Values (Array) ---------
function getDimensions() {
  return [width = 100, height = 50];
}

let [w, h] = getDimensions();
console.log(`Width: ${w}, Height: ${h}`);  // Width: 100, Height: 50


// --------- 7. Function Expression ---------
const isEven = function(num) {
  return num % 2 === 0;
};

console.log("Is 4 even?", isEven(4));    // Is 4 even? true
console.log("Is 7 even?", isEven(7));    // Is 7 even? false


// --------- 8. Function Calling Another Function ---------
function square(num) {
  return num * num;
}

function calculateArea(sideLength) {
  return square(sideLength);
}

console.log("Area of square:", calculateArea(5));  // Area of square: 25


// --------- 9. Anonymous Function with forEach ---------
let students = ["Alice", "Bob", "Charlie"];

students.forEach(function(student) {
  console.log(student);
});


// --------- 10. Arrow Function with forEach ---------
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => {
  console.log(num * 2);  // Print double of each number
});
