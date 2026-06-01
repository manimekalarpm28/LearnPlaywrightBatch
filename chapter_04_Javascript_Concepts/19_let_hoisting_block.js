let x="global";
if(true){
    console.log(x); // Output: "global" (accessing the global variable)
    let x="block";
    console.log(x); // Output: "block" (accessing the block-scoped variable)
}