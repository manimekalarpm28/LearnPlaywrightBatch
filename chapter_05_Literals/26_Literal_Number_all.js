/**
 * 26_Literal_Number_all.js
 * Comprehensive guide to all data types and literals supported in JavaScript
 * 
 * JavaScript has 8 primitive types and objects:
 * Primitives: String, Number, BigInt, Boolean, Null, Undefined, Symbol
 * Objects: Object (including Array, Function, RegExp, etc.)
 */

console.log("========================================");
console.log("ALL JAVASCRIPT DATA TYPES & LITERALS");
console.log("========================================\n");

// ===== 1. STRING LITERALS =====
console.log("1. STRING LITERALS");
console.log("-----------------");

// Single quotes
const singleQuote = 'Hello World';
console.log("Single quote:", singleQuote, typeof singleQuote);

// Double quotes
const doubleQuote = "Hello World";
console.log("Double quote:", doubleQuote, typeof doubleQuote);

// Template literals (backticks) - ES6
const name = "Manimekala";
const age = 25;
const templateLiteral = `My name is ${name} and I am ${age} years old`;
console.log("Template literal:", templateLiteral, typeof templateLiteral);

// Escape sequences
const escapeSequence = "Line 1\nLine 2\tTabbed";
console.log("Escape sequences:", escapeSequence);

console.log("\n");

// ===== 2. NUMBER LITERALS =====
console.log("2. NUMBER LITERALS");
console.log("------------------");

// Decimal numbers
const decimal = 42;
const decimalFloat = 3.14;
console.log("Decimal:", decimal, typeof decimal);
console.log("Decimal Float:", decimalFloat, typeof decimalFloat);

// Exponential notation
const exponential = 2.5e3;  // 2.5 * 10^3 = 2500
console.log("Exponential notation:", exponential, typeof exponential);

// Hexadecimal (base 16) - starts with 0x
const hexadecimal = 0xFF;  // 255 in decimal
console.log("Hexadecimal (0xFF):", hexadecimal, typeof hexadecimal);

// Octal (base 8) - starts with 0o (strict mode)
const octal = 0o77;  // 63 in decimal
console.log("Octal (0o77):", octal, typeof octal);

// Binary (base 2) - starts with 0b
const binary = 0b1010;  // 10 in decimal
console.log("Binary (0b1010):", binary, typeof binary);

// Special number values
const infinity = Infinity;
const negInfinity = -Infinity;
const notANumber = NaN;
console.log("Infinity:", infinity, typeof infinity);
console.log("-Infinity:", negInfinity, typeof negInfinity);
console.log("NaN:", notANumber, typeof notANumber);

// Zero and negative zero
const zero = 0;
const negZero = -0;
console.log("Zero:", zero, typeof zero);
console.log("Negative Zero:", negZero, typeof negZero);

console.log("\n");

// ===== 3. BIGINT LITERALS =====
console.log("3. BIGINT LITERALS");
console.log("------------------");

// BigInt for numbers larger than Number.MAX_SAFE_INTEGER (2^53 - 1)
const bigInt1 = 123456789012345678901234567890n;
console.log("BigInt:", bigInt1, typeof bigInt1);

// BigInt operations
const bigInt2 = 100n;
const bigInt3 = 50n;
console.log("BigInt addition:", bigInt2 + bigInt3);
console.log("BigInt multiplication:", bigInt2 * bigInt3);

// Note: Cannot mix Number and BigInt in operations
// console.log(100 + 50n);  // TypeError: Cannot mix BigInt and other types

console.log("\n");

// ===== 4. BOOLEAN LITERALS =====
console.log("4. BOOLEAN LITERALS");
console.log("-------------------");

const trueValue = true;
const falseValue = false;
console.log("True:", trueValue, typeof trueValue);
console.log("False:", falseValue, typeof falseValue);

// Boolean in conditions
if (true) {
    console.log("Boolean true evaluates to true in conditions");
}

console.log("\n");

// ===== 5. NULL & UNDEFINED =====
console.log("5. NULL & UNDEFINED");
console.log("-------------------");

// Null - intentional absence of value
const nullValue = null;
console.log("Null:", nullValue, typeof nullValue);  // typeof returns "object" (known quirk)

// Undefined - variable declared but not initialized
let undefinedValue;
console.log("Undefined:", undefinedValue, typeof undefinedValue);

// Function without return
function noReturn() {
    console.log("Function returns undefined");
}
const result = noReturn();
console.log("Function result:", result, typeof result);

console.log("\n");

// ===== 6. OBJECT LITERALS =====
console.log("6. OBJECT LITERALS");
console.log("------------------");

const person = {
    firstName: "Manimekala",
    lastName: "R",
    age: 25,
    email: "manimekala@example.com"
};
console.log("Object:", person, typeof person);
console.log("Object.firstName:", person.firstName);

// Empty object
const emptyObject = {};
console.log("Empty Object:", emptyObject, typeof emptyObject);

console.log("\n");

// ===== 7. ARRAY LITERALS =====
console.log("7. ARRAY LITERALS");
console.log("-----------------");

// Arrays are special objects
const numbers = [1, 2, 3, 4, 5];
console.log("Array:", numbers, typeof numbers);  // typeof returns "object"

// Mixed type array
const mixed = [1, "hello", true, null, undefined];
console.log("Mixed Array:", mixed);

// Nested array
const nested = [[1, 2], [3, 4], [5, 6]];
console.log("Nested Array:", nested);

// Empty array
const emptyArray = [];
console.log("Empty Array:", emptyArray);

console.log("\n");

// ===== 8. FUNCTION LITERALS / EXPRESSIONS =====
console.log("8. FUNCTION LITERALS");
console.log("--------------------");

// Function expression
const add = function(a, b) {
    return a + b;
};
console.log("Function expression:", add, typeof add);
console.log("Function result add(5, 3):", add(5, 3));

// Arrow function (ES6)
const multiply = (a, b) => a * b;
console.log("Arrow function result multiply(5, 3):", multiply(5, 3));

// Named function
function subtract(a, b) {
    return a - b;
}
console.log("Named function result subtract(10, 3):", subtract(10, 3));

console.log("\n");

// ===== 9. REGULAR EXPRESSION LITERALS =====
console.log("9. REGULAR EXPRESSION LITERALS");
console.log("-------------------------------");

// Regex pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log("Regex literal:", emailPattern, typeof emailPattern);

// Test regex
const testEmail = "user@example.com";
console.log("Email matches pattern:", emailPattern.test(testEmail));

// Regex with flags
const caseInsensitive = /hello/i;
console.log("Case insensitive regex:", caseInsensitive.test("HELLO"));

console.log("\n");

// ===== 10. SYMBOL (ES6) =====
console.log("10. SYMBOL (ES6)");
console.log("----------------");

// Symbols are unique identifiers
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log("Symbol:", symbol1, typeof symbol1);
console.log("Symbols are unique (symbol1 === symbol2):", symbol1 === symbol2);

// Using symbols as object keys
const obj = {};
obj[symbol1] = "First";
obj[symbol2] = "Second";
console.log("Object with symbol keys:", obj);

console.log("\n");

// ===== 11. DATE OBJECT =====
console.log("11. DATE OBJECT");
console.log("---------------");

const currentDate = new Date();
console.log("Date object:", currentDate, typeof currentDate);
console.log("Date string:", currentDate.toString());

console.log("\n");

// ===== 12. MAP & SET (ES6) =====
console.log("12. MAP & SET (ES6)");
console.log("-------------------");

// Map - key-value pairs
const map = new Map();
map.set("name", "Manimekala");
map.set("age", 25);
console.log("Map:", map, typeof map);
console.log("Map get 'name':", map.get("name"));

// Set - unique values
const set = new Set([1, 2, 2, 3, 3, 3]);
console.log("Set:", set, typeof set);
console.log("Set size:", set.size);

console.log("\n");

// ===== 13. SUMMARY TABLE =====
console.log("========================================");
console.log("SUMMARY OF ALL JAVASCRIPT DATA TYPES");
console.log("========================================\n");

const dataTypes = {
    "String": "'hello', \"hello\", `hello`",
    "Number": "42, 3.14, 0xFF, 0o77, 0b1010, 2.5e3, Infinity, NaN",
    "BigInt": "123456789n",
    "Boolean": "true, false",
    "Null": "null",
    "Undefined": "undefined",
    "Object": "{key: value}",
    "Array": "[1, 2, 3]",
    "Function": "function() {}, () => {}, function name() {}",
    "RegExp": "/pattern/, /pattern/flags",
    "Symbol": "Symbol('description')",
    "Date": "new Date()",
    "Map": "new Map()",
    "Set": "new Set()",
    "Error": "new Error('message')",
    "Promise": "new Promise((resolve, reject) => {})"
};

for (const [type, examples] of Object.entries(dataTypes)) {
    console.log(`${type}: ${examples}`);
}

console.log("\n========================================\n");
console.log("END OF DATA TYPES REFERENCE");
console.log("========================================");
