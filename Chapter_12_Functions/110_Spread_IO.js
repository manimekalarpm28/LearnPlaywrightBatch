function add(a,b,c){
   let result = a+b+c;
    console.log(result);
    
    return result;

}

let num=[1,2,3];
add(...num);

let responseCodes=[200,201,404];

function hasError(...codes){
    return codes.some(c=> c>=400);
}
console.log(hasError(...responseCodes));

