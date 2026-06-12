let statuses=["pass","Fail","Skip"];

console.log(statuses[0]);
console.log(statuses[1]);

console.log("----------");

console.log(statuses.at(-1));
console.log(statuses.at(-2));
console.log(statuses.at(-3));

console.log("----------");

statuses[1]="blocked";

console.log(statuses.at(1));



