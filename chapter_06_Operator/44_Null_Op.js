// 44_Null_Op.js
// Nullish Coalescing Operator (??)
// Returns the right operand when the left operand is null or undefined (nullish values)
// Introduced in ES2020

console.log("===== NULLISH COALESCING OPERATOR (??) =====\n");

// ===== BASIC CONCEPT =====
console.log("--- BASIC CONCEPT ---");
const value1 = null;
const defaultValue1 = "Default Value";
console.log("null ?? 'Default Value':", value1 ?? defaultValue1);  // "Default Value"

const value2 = undefined;
console.log("undefined ?? 'Default Value':", value2 ?? "Default Value");  // "Default Value"

const value3 = 0;
const defaultValue3 = "Default";
console.log("0 ?? 'Default':", value3 ?? defaultValue3);  // 0 (not nullish, so returns 0)

const value4 = "";
console.log("'' ?? 'Default':", value4 ?? "Default");  // "" (not nullish, empty string is returned)

const value5 = false;
console.log("false ?? 'Default':", value5 ?? "Default");  // false (not nullish)

// ===== DIFFERENCE: ?? vs || vs &&  =====
console.log("\n--- DIFFERENCE: ?? vs || vs && ---");

const user = {
  name: "John",
  age: 0,          // 0 is falsy but valid
  email: null,     // nullish
  phone: undefined // nullish
};

console.log("\nUsing ||  (Logical OR - treats falsy values):");
console.log("user.age || 18:", user.age || 18);              // 18 (because 0 is falsy)
console.log("user.email || 'No email':", user.email || "No email");  // "No email"

console.log("\nUsing ?? (Nullish Coalescing - treats only null/undefined):");
console.log("user.age ?? 18:", user.age ?? 18);              // 0 (because 0 is not nullish)
console.log("user.email ?? 'No email':", user.email ?? "No email");  // "No email"

// ===== REAL-WORLD EXAMPLES =====
console.log("\n===== REAL-WORLD EXAMPLES =====\n");

// Example 1: API Response with optional fields
console.log("Example 1: API Response");
const apiResponse = {
  id: 123,
  username: "john_doe",
  bio: null,              // User hasn't filled bio
  followerCount: 0,       // Valid count (zero followers)
  premium: undefined      // Field not included
};

const displayBio = apiResponse.bio ?? "No bio available";
const displayFollowers = apiResponse.followerCount ?? 0;
const displayPremium = apiResponse.premium ?? false;

console.log("Bio:", displayBio);                    // "No bio available"
console.log("Followers:", displayFollowers);        // 0
console.log("Premium:", displayPremium);            // false

// Example 2: Form Input Defaults
console.log("\nExample 2: Form Input Defaults");
const formData = {
  firstName: "Alice",
  middleName: null,       // Not provided
  age: 0,                 // Valid age (newborn)
  country: undefined      // Not provided
};

const fullName = `${formData.firstName} ${formData.middleName ?? ""} Smith`.trim();
const ageDisplay = `Age: ${formData.age ?? 18}`;
const country = formData.country ?? "USA";

console.log("Full Name:", fullName);        // "Alice Smith"
console.log(ageDisplay);                    // "Age: 0"
console.log("Country:", country);           // "USA"

// Example 3: Configuration with Defaults
console.log("\nExample 3: Configuration with Defaults");
const userConfig = {
  theme: "dark",
  fontSize: null,         // Not set
  autoSave: 0,            // Valid: 0 disabled, 1 enabled
  notifications: undefined // Not set
};

const theme = userConfig.theme ?? "light";
const fontSize = userConfig.fontSize ?? 14;
const autoSave = userConfig.autoSave ?? 1;
const notifications = userConfig.notifications ?? true;

console.log("Theme:", theme);               // "dark"
console.log("Font Size:", fontSize);        // 14
console.log("Auto Save:", autoSave);        // 0
console.log("Notifications:", notifications); // true

// Example 4: Chaining Nullish Coalescing
console.log("\nExample 4: Chaining ?? Operators");
const settings = {
  userPreference: null,
  systemDefault: undefined,
  hardcodedFallback: "Default Setting"
};

const finalSetting = settings.userPreference ?? settings.systemDefault ?? settings.hardcodedFallback;
console.log("Final Setting:", finalSetting);  // "Default Setting"

// Example 5: Database Query Results
console.log("\nExample 5: Database Query Results");
const dbResult = {
  productName: "Laptop",
  price: 999,
  discount: 0,            // Valid: no discount
  description: null,      // Not provided in DB
  stock: undefined        // Field not retrieved
};

const displayPrice = dbResult.price ?? 0;
const displayDiscount = dbResult.discount ?? 10;
const displayDescription = dbResult.description ?? "No description available";
const displayStock = dbResult.stock ?? "Out of Stock";

console.log("Product:", dbResult.productName);
console.log("Price: $" + displayPrice);             // $999
console.log("Discount:", displayDiscount + "%");    // 0%
console.log("Description:", displayDescription);    // "No description available"
console.log("Stock:", displayStock);                // "Out of Stock"

// Example 6: Function Parameters
console.log("\nExample 6: Function with Nullish Coalescing");
function createUser(name, age, role) {
  const finalName = name ?? "Anonymous";
  const finalAge = age ?? 18;
  const finalRole = role ?? "user";
  
  console.log(`User: ${finalName}, Age: ${finalAge}, Role: ${finalRole}`);
}

createUser("Bob", 25, "admin");        // User: Bob, Age: 25, Role: admin
createUser("Alice", null, undefined);  // User: Alice, Age: 18, Role: user
createUser(null, 0, null);             // User: Anonymous, Age: 0, Role: user

// ===== NULLISH COALESCING ASSIGNMENT (??=) =====
console.log("\n===== NULLISH COALESCING ASSIGNMENT (??=) =====");

let config = {
  timeout: null,
  retries: 0,
  debug: undefined
};

console.log("Before assignment:", config);

config.timeout ??= 5000;    // Assigns 5000 (was null)
config.retries ??= 3;       // Does NOT assign 3 (0 is not nullish)
config.debug ??= false;     // Assigns false (was undefined)

console.log("After assignment:", config);
// { timeout: 5000, retries: 0, debug: false }

// ===== BEST PRACTICES =====
console.log("\n===== BEST PRACTICES =====");
console.log("1. Use ?? for null/undefined checks (not falsy checks)");
console.log("2. Use || when you want to treat all falsy values as invalid");
console.log("3. Chain ?? operators for multiple fallbacks");
console.log("4. Use ??= for conditional assignment of nullish values");
console.log("5. Remember: ?? only checks for null and undefined, not false, 0, '', etc.");
