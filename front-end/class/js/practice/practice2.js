
// const p = document.createElement("p");
// p.innerText="Hello How Are You"
// console.log(p);

// document.getElementById("root").appendChild(p);

const arr = ["abc", "def",'ghi','jkl','mno','pqr','stu','vwx','xyz'];
console.log(arr.slice(1, 5));
console.log(arr);
const arr1 = ["abc", "def",'ghi','jkl','mno','pqr','stu','vwx','xyz'];
console.log(arr1.splice(1, 5));
console.log(arr1);

const tostr = ["chaitu","vedansh","chandana","laksman","ravi"];
const tostrresult = tostr.toString();
console.log(tostrresult);

const pushresult = tostr.push("mottereddy");
console.log("pushresult = " + pushresult);

let push = ["mcr", "chaitu", "chaitanya", "reddy"];
let push2 = push.push();
console.log(push2);

let pop = push.pop();
console.log(pop);

const del = ["chaitu", "reddy", "chaitanya", "mcr"];
const del2 = del.delete([2]);
console.log(del2);

