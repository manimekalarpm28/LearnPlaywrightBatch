function validateStatusCode(status){
    if(status>= 200 && status <=300)
        console.log("Request is fine!");
    
}

const validateStatusCode_exp=function(status){
    if(status >= 200 && status <=300){
        console.log("request is fine");
        
    }
}

const validateStatusCode_Arrow=(status) => {
    if(status >= 200 && status <=300)
        console.log("request is fine");
        
}