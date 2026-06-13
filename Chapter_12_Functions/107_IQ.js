function runTest(name,status,duration){
    return `${name},${status},${duration}`;
}
const result=runTest("Login","pass","320");
console.log(result);
