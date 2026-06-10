let age = 20;
let result=age>18?"Eligible":"Not Eligible";
console.log(result);

let environment="Production";
let url=environment==="Production"?"https://www.production.com":"https://www.development.com";
console.log(url);

let isCI=true;
let browswerMode=isCI?"Headless":"Headful";
console.log(browswerMode);


let responseTime=500;
let sla=1000;
let status=responseTime<=sla?"Within SLA":"Exceeding SLA";
console.log(status);


let condtion=true;
let output=condtion?"Condition is true":"Condition is false";
console.log(output);

