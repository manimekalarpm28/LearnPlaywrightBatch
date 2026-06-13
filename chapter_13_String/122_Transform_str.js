let str="  ;login;  ";

console.log(str.toLowerCase());
console.log(str.toUpperCase());

let s=" Mani ";

console.log(s.trim());

console.log(str.trimStart());
console.log(str.trimEnd());

let msg="Test: FAIL. Retry: FAIL.";

console.log(msg.replace("FAIL","PASS"));
console.log(msg.replaceAll("FAIL","PASS"));
console.log(msg.replace(/FAIL/g,"PASS")); //g = "global" — replaces ALL occurrences Without g — replaces only the first occurrence

console.log("Hello" + " " + "World");
console.log("Hello".concat(" ","World"));
console.log(`${"Hello"} ${"World"}`);

let url="https://app.vwo.com?app=pramod";
console.log(url.replace(/app/g,"qa"));


let r="pass,fail,Skip".split(",");
console.log(r);

let rr="test_login_pass".split("_").join(" ");
console.log(rr);

let parts=["2024","03","07"];
let date=parts.join("_");
console.log(date);

