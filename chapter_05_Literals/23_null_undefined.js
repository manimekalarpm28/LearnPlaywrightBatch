/**
 * 23_null_undefined.js
 * Understanding the difference between NULL and UNDEFINED in JavaScript
 */

console.log("=====================================");
console.log("NULL vs UNDEFINED in JavaScript");
console.log("=====================================\n");

// ===== 1. WHAT IS UNDEFINED? =====
console.log("1. WHAT IS UNDEFINED?");
console.log("---------------------");
console.log("Undefined means: 'No value has been assigned yet'");
console.log("It's the DEFAULT value when something is not initialized\n");

// Example 1: Declared but not assigned
let x;
console.log("let x; (no value assigned)");
console.log("Value of x:", x);
console.log("Type of x:", typeof x);
console.log();

// Example 2: Function with no return statement
function noReturn() {
    console.log("This function does nothing");
}
const result = noReturn();
console.log("Function with no return statement returns:", result);
console.log("Type:", typeof result);
console.log();

// Example 3: Missing function parameters
function greet(name, age) {
    console.log("Name:", name);
    console.log("Age:", age);  // Not provided, so undefined
}
console.log("Calling greet('Manimekala') without second parameter:");
greet("Manimekala");
console.log();

// Example 4: Accessing undefined properties
const person = { name: "Manimekala" };
console.log("person.email (property doesn't exist):", person.email);
console.log("Type:", typeof person.email);
console.log();

// ===== 2. WHAT IS NULL? =====
console.log("\n2. WHAT IS NULL?");
console.log("----------------");
console.log("Null means: 'Intentionally no value'");
console.log("It's DELIBERATELY set to indicate 'nothing'\n");

// Example 1: Explicitly setting to null
let y = null;
console.log("let y = null; (intentionally set)");
console.log("Value of y:", y);
console.log("Type of y:", typeof y);  // Returns "object" (known quirk in JS)
console.log();

// Example 2: API response with no data
function fetchUserData(userId) {
    if (userId === 0) {
        return null;  // Intentionally returning null (no user found)
    }
    return { name: "Manimekala", age: 25 };
}
console.log("fetchUserData(0):", fetchUserData(0));
console.log("fetchUserData(1):", fetchUserData(1));
console.log();

// ===== 3. KEY DIFFERENCES =====
console.log("\n3. KEY DIFFERENCES");
console.log("------------------\n");

console.log("Comparison Table:");
console.log("┌─────────────────────┬──────────────────┬──────────────────┐");
console.log("│ Aspect              │ UNDEFINED        │ NULL             │");
console.log("├─────────────────────┼──────────────────┼──────────────────┤");
console.log("│ Meaning             │ Not initialized  │ Intentionally set│");
console.log("│ Type                │ undefined        │ object (quirk)   │");
console.log("│ Default value       │ Yes              │ No               │");
console.log("│ typeof              │ 'undefined'      │ 'object'         │");
console.log("│ How it occurs       │ Automatically    │ Manually set     │");
console.log("│ Equality (==)       │ undefined == null│ null == undefined│");
console.log("│ Equality (===)      │ undefined === un │ null === null    │");
console.log("└─────────────────────┴──────────────────┴──────────────────┘\n");

// ===== 4. SIMPLE EXAMPLES =====
console.log("4. SIMPLE EXAMPLES");
console.log("------------------\n");

// Example 1: Variable declarations
console.log("Example 1: Variable Declaration");
let age;  // undefined (not assigned)
let status = null;  // null (intentionally no value)
console.log("age:", age, "(not assigned - undefined)");
console.log("status:", status, "(intentionally set - null)");
console.log();

// Example 2: Function returns
console.log("Example 2: Function Returns");
function getValue1() {
    // No return statement = returns undefined
}
function getValue2() {
    return null;  // Explicitly returns null
}
console.log("getValue1():", getValue1(), "← returns undefined");
console.log("getValue2():", getValue2(), "← returns null");
console.log();

// Example 3: Object properties
console.log("Example 3: Object Properties");
const student = {
    name: "Manimekala",
    email: null,  // Intentionally empty email
    phone: undefined  // Not set yet
};
console.log("student:", student);
console.log("email is null (intentionally):", student.email === null);
console.log("phone is undefined (not set):", student.phone === undefined);
console.log();

// ===== 5. CHECKING FOR NULL OR UNDEFINED =====
console.log("5. CHECKING FOR NULL OR UNDEFINED");
console.log("---------------------------------\n");

let testValue = null;

console.log("Method 1: Using == (loose equality)");
console.log("testValue == null:", testValue == null);  // true for both null and undefined
console.log("testValue == undefined:", testValue == undefined);  // true for both null and undefined
console.log();

console.log("Method 2: Using === (strict equality)");
console.log("testValue === null:", testValue === null);  // true only for null
console.log("testValue === undefined:", testValue === undefined);  // false
console.log();

console.log("Method 3: Using typeof");
console.log("typeof testValue === 'object':", typeof testValue === 'object');  // true for null (quirk)
console.log("typeof testValue === 'undefined':", typeof testValue === 'undefined');  // false
console.log();

// ===== 6. PRACTICAL SCENARIOS =====
console.log("6. PRACTICAL SCENARIOS");
console.log("---------------------\n");

console.log("Scenario 1: Form validation");
const formData = {
    username: "Manimekala",
    password: undefined,  // User didn't enter it yet
    email: null  // User intentionally left it blank
};

console.log("Form Data:", formData);
console.log("Username filled:", formData.username !== undefined && formData.username !== null);
console.log("Password filled:", formData.password !== undefined && formData.password !== null);
console.log("Email filled:", formData.email !== undefined && formData.email !== null);
console.log();

console.log("Scenario 2: Database query");
function getUserFromDB(id) {
    if (id === 0) {
        return null;  // Record not found (intentional)
    }
    return { id: id, name: "User" };
}

console.log("getUserFromDB(0):", getUserFromDB(0), "← null = not found");
console.log("getUserFromDB(1):", getUserFromDB(1), "← object = found");
console.log();

// ===== 7. WHEN TO USE =====
console.log("7. WHEN TO USE");
console.log("--------------\n");

console.log("Use UNDEFINED when:");
console.log("  • Variable is declared but not initialized");
console.log("  • Function has no return statement");
console.log("  • Function parameter is not provided");
console.log("  • Object property doesn't exist");
console.log();

console.log("Use NULL when:");
console.log("  • You want to intentionally indicate 'no value'");
console.log("  • Clearing a variable's value");
console.log("  • API returns null for missing data");
console.log("  • Explicitly assigning 'nothing' as value");
console.log();

// ===== 8. QUICK COMPARISON =====
console.log("8. QUICK COMPARISON");
console.log("-------------------\n");

const comparison = [
    { test: "undefined == null", result: undefined == null },
    { test: "undefined === null", result: undefined === null },
    { test: "typeof undefined", result: typeof undefined },
    { test: "typeof null", result: typeof null },
    { test: "null == 0", result: null == 0 },
    { test: "undefined == 0", result: undefined == 0 }
];

comparison.forEach(item => {
    console.log(`${item.test}: ${item.result}`);
});

console.log("\n=====================================");
console.log("KEY TAKEAWAY");
console.log("=====================================");
console.log("UNDEFINED = 'No value assigned'");
console.log("NULL = 'Intentionally no value'");
console.log("=====================================\n");
