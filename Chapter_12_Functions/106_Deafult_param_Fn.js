function retry(testName,maxRetries=3,delay=1000){
console.log(`Retrying  ${testName} up tp ${maxRetries} times, ${delay}ms apart`);
}

retry("Login Test");
retry("Registration Test",5,2000);