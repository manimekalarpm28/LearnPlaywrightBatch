function runWithloggin(testFn,testName){
    let result=testFn();
    console.log(testName);
    return result;
}

function loginTest(){
    return "pass";

}

function loginTestFailed(){
    return "Fail";
}

console.log(runWithloggin(loginTest,"Login Test"));
 console.log(runWithloggin(loginTestFailed,"Dashboard Failed Test"));