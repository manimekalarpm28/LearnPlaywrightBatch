console.log(message); // ReferenceError: Cannot access 'message' before initialization

let message = "Hello, World!";
console.log(message); // Output: "Hello, World!"

{
    console.log(score); // ReferenceError: Cannot access 'score' before initialization
    score =50; // ReferenceError: Cannot access 'score' before initialization
    let score=100;
    console.log(score); // Output: 100
}