let browser=['chrome','firefox','safari','opera','edge'];
console.log(browser.length);
console.log(browser);

console.log("------------");


browser.pop();
console.log(browser);


console.log("------------");

let removed=browser.shift();
console.log(removed);

console.log(browser)

for(let i=0;i<browser.length;i++){
    console.log(browser[i]);
    if(browser[i]==="opera")
        console.log("Opera is removed from the selenium!");
        
    
}


console.log(browser)

