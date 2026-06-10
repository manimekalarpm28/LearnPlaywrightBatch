// 38_Confusion_Comparision.js
// Understanding the confusion between == (Loose Equality) and === (Strict Equality)

console.log("===== CONFUSION: == vs === =====\n");

// ===== LOOSE EQUALITY (==) =====
// Performs type coercion/conversion before comparison
console.log("--- LOOSE EQUALITY (==) ---");
console.log("1 == '1':", 1 == '1');              // true (string '1' converted to number 1)
console.log("1 == true:", 1 == true);            // true (true converted to 1)
console.log("0 == false:", 0 == false);          // true (false converted to 0)
console.log("'' == 0:", '' == 0);                // true (empty string converted to 0)
console.log("null == undefined:", null == undefined);  // true (special case)
console.log("'10' == 10:", '10' == 10);          // true (string '10' converted to number)

// ===== STRICT EQUALITY (===) =====
// NO type coercion, compares both value AND type
console.log("\n--- STRICT EQUALITY (===) ---");
console.log("1 === '1':", 1 === '1');            // false (different types: number vs string)
console.log("1 === true:", 1 === true);          // false (number vs boolean)
console.log("0 === false:", 0 === false);        // false (number vs boolean)
console.log("'' === 0:", '' === 0);              // false (string vs number)
console.log("null === undefined:", null === undefined);  // false (different types)
console.log("'10' === 10:", '10' === 10);        // false (string vs number)

// ===== REAL WORLD CONFUSION EXAMPLES =====
console.log("\n===== REAL WORLD CONFUSION =====\n");

// Example 1: API Response (usually comes as string)
const userID = "42";
const expectedID = 42;

console.log("Example 1: API Response");
console.log("userID == expectedID:", userID == expectedID);    // true (confusing!)
console.log("userID === expectedID:", userID === expectedID);  // false (correct!)

// Example 2: Form Input (always string)
const formAge = "25";
const minimumAge = 25;

console.log("\nExample 2: Form Input");
console.log("formAge == minimumAge:", formAge == minimumAge);    // true (might pass validation wrongly)
console.log("formAge === minimumAge:", formAge === minimumAge);  // false (strict check needed)

// Example 3: Database Results
const dbCount = "0";
const expectedCount = 0;

console.log("\nExample 3: Database Results");
console.log("dbCount == expectedCount:", dbCount == expectedCount);    // true
console.log("dbCount === expectedCount:", dbCount === expectedCount);  // false
console.log("if(dbCount) would be truthy, but if(dbCount === 0) would be falsy");

// ===== WHY STRICT EQUALITY IS BETTER =====
console.log("\n===== WHY STRICT EQUALITY (===) IS RECOMMENDED =====");
console.log("✓ More predictable: No hidden type conversions");
console.log("✓ Prevents bugs: Catches type mismatches");
console.log("✓ Better performance: No type coercion overhead");
console.log("✓ Industry standard: Most developers use ===");

// ===== BEST PRACTICES =====
console.log("\n===== BEST PRACTICES =====");
console.log("1. Always use === instead of ==");
console.log("2. Always use !== instead of !=");
console.log("3. If you need loose comparison, explicitly convert types first");

// Example of explicit type conversion
const stringNumber = "42";
const actualNumber = 42;

console.log("\nExplicit Conversion Example:");
console.log("parseInt(stringNumber) === actualNumber:", parseInt(stringNumber) === actualNumber);  // true
console.log("Number(stringNumber) === actualNumber:", Number(stringNumber) === actualNumber);      // true
console.log("stringNumber * 1 === actualNumber:", stringNumber * 1 === actualNumber);              // true
