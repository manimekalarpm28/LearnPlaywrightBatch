let firstname="manimekala";
let lastname="R";
let fullName=`${firstname} ${lastname}`;
let fullname2=`${firstname} ${lastname}`;
console.log(fullName);
console.log(fullname2);

let env="staging";
env="production";
let userID=12345;
const apiURL=`https://${env}.api.example.com/users/${userID}`;
console.log(apiURL);


//playwright code

const rowIndex=3;
const columnName="email";
await.page.Locator(`[data-row="${rowIndex}" ][ data-column="${columnName}"]`).click();

