if("hello")
    console.log("This will be printed because 'hello' is a truthy value.");

if("")
    console.log("This will NOT be printed because an empty string is a falsy value.");  
if(0)
    console.log("This will NOT be printed because 0 is a falsy value.");    
if(5)
    console.log("This will be printed because 5 is a truthy value.");
if(-3)
    console.log("This will be printed because -3 is a truthy value.");
if(null)
    console.log("This will NOT be printed because null is a falsy value.");
if(undefined)
    console.log("This will NOT be printed because undefined is a falsy value.");
if(NaN)
    console.log("This will NOT be printed because NaN is a falsy value.");  
if({})
    console.log("This will be printed because an empty object is a truthy value.");
if([])
    console.log("This will be printed because an empty array is a truthy value.");      
if(function(){})
    console.log("This will be printed because a function is a truthy value.");

if(true)
    console.log("This will be printed because true is a truthy value.");    
if(false)
    console.log("This will NOT be printed because false is a falsy value.");