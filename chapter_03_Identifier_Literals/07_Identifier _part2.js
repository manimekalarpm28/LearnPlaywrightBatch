// Identifier naming conventions and rules in JavaScript

// Valid identifier conventions:
var name = "Mani";               // simple lower-case name
var firstName = "Mani";          // camelCase: common for variables and functions
var first_name = "Mani";         // snake_case: common in some languages, allowed in JS
var LastName = "Mekala";         // PascalCase: common for class names and constructors
var PI_VALUE = 3.14;              // UPPER_SNAKE_CASE: common for constants
var $amount = 100;                // $ prefix allowed
var _index = 0;                   // _ prefix allowed
var user1 = "Alice";             // letters followed by digits

// JavaScript identifier rules:
// 1. Cannot start with a digit
//    var 1name = "test"; // invalid
// 2. Can start with letter, $ or _
//    var $name = "test"; // valid
//    var _name = "test"; // valid
// 3. Can contain letters, digits, $ and _ after first character
//    var user_1 = "test"; // valid
// 4. Cannot contain spaces or hyphens
//    var my-name = "test"; // invalid
// 5. Cannot use reserved keywords
//    var var = 10; // invalid
// 6. Identifiers are case-sensitive
//    var Name = "A";
//    var name = "B"; // different from Name

// Common conventions summary:
// - camelCase: variables and functions
// - PascalCase: classes and constructors
// - snake_case: readability in some styles
// - UPPER_SNAKE_CASE: constants
// - Avoid reserved words and invalid symbols
// - Use meaningful names and be consistent

