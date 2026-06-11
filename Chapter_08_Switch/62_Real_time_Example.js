let responseCode=200;

switch(responseCode){
    case 200:
        console.log("Success: The request was successful.");
        break;  
    case 404:
        console.log("Error: The requested resource was not found.");
        break;
    case 500:
        console.log("Error: Internal Server Error.");
        break;
    default:
        console.log("Unknown status code: " + responseCode);
}