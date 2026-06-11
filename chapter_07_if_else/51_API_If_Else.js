let statusCode = 404;
if (statusCode === 200) {
    console.log("Success: The request was successful.");
} else if (statusCode === 404) {
    console.log("Error: The requested resource was not found.");
} else if (statusCode === 500) {
    console.log("Error: Internal Server Error.");
} else {
    console.log("Unknown status code: " + statusCode);
}