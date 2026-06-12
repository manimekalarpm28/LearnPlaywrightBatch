let scores=[70,80,90,40,50];

let grades=scores.map(s => s > 20 ? "pass":"fail");
console.log(grades);

let passing=scores.filter(s => s>=70);
console.log(passing);


let reduce=scores.reduce((a,b)=>(a+b),0);
console.log(reduce);

console.log("------");

let students=["mani","Mekala","karthik","Balaji"];
for(let student in students){
    console.log(student," => ",students[student]);
}


let tests=[10,20,30,40,50];

console.log("------");

for(let [i,test] of tests.entries()){
    console.log(i,test);
    
}


let nested=[[1,2],[3,4],[5,6]];
console.log(nested.flat());


