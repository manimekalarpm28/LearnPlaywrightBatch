// Valid identifier examples:
var $ = 10;              // starts with $, allowed
var _a = 20;             // starts with _, allowed
var p = 30;              // single letter identifier
var abc123 = 40;         // letters followed by digits
var Name = "Mani";     // case-sensitive identifier
var name = "Mani";     // different from Name
var name$lastname = "Manimekala"; // $ inside identifier
var last_name = "R";              // _ inside identifier

// Invalid identifier examples (commented out because they cause syntax errors):
// var 1a = 10;    // invalid: cannot start with a digit
// var @name = 20; // invalid: @ is not allowed in identifiers
// var #name = 30; // invalid: # is not allowed in identifiers
// var var = 40;   // invalid: reserved keyword
// var my-name = 50; // invalid: hyphen is not allowed in identifier names
