var a=10;

console.log(a); // Output: 10

function printhello(){
  
    console.log("Hello");
    var a=20; // This 'a' is different from the global 'a' due to function scope
    console.log(a); // Output: 20
    if(true){
        var a=30; // This 'a' is still the same as the one declared in the function scope
        console.log(a); // Output: 30
    }                   
    console.log("a->" + a); // Output: 30
}
printhello();