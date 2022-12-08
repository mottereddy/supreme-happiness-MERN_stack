//the var keyword is a functional scope
//the let keyword is a block scope
//the const keyword is a block scope

//  the block scope means the values is not goining to assign outside the block
// example: - {
//     let a = 10;   // here 10 is going to assign insde the block
// }

{ 
    let a = 10;
    console.log(a);   // the output is 10
}
// console.log(a); // here the output is 'not defind' because the variable and value is not assigned

{ 
    var number = 18;                //here var is a functional scope
    console.log(number, typeof null);  //here the output is 10 'object' because the null type is object
    console.log(typeof number, number);//here the output is number 10 because the type is number
}
console.log(number, typeof null); // here the output is 10 and type is object

{ 
    let num = 23;
    let number = "35";
    console.log(num, number, typeof num, typeof number);
    //here the output is 23 35 number string 
}
//console.log(num, number, typeof num, typeof number); //here the output is not defind


{ 
    var num = 23;
    let number = "35";
    console.log(num, number, typeof num, typeof number);
    //here the output is 23 35 number string 
}
console.log(num, typeof num, number, typeof number);

{ 
    let char;
    console.log(char);  // here the output is undefind because we not assigned the value
}

let name1 =  {
    name2: "chaitanya",
};
name1 = {
    name2: "chaitu",
}
console.log(name1);  //here the output is {name2:chaitu} because we are re assigining

var name4 = {
    name: "reddy",
}
console.log(name4); //here the output is {name:reddy}


var name5 = ["chaitu", "chaitanya", "sai"]  //if it is in square brackets it is an array
console.log(name5);

let name6 = ["vedansh", "reddy", "ravi"]
console.log(name6);

    let name8 = ["lakshman", "ravi", "vedansh"];
    console.log(name8);


let name9 = {
    name10: "vedansh",
};
console.log(name9, typeof name9, typeof name10); // here the output is { name10: 'vedansh' } object undefined

let number100 = null;
console.log(typeof number100); //here null is an object

function samplename() {
    
}
console.log(samplename); //here the output is [function:samplename]

function samplename2() { };
console.log(typeof samplename2) // here the output is function

let check = true;
console.log(typeof check);

let x = 2;
let y = 2;
console.log(x == y);       // here the output is true
console.log(x != y, x >= y); // here the output is  false true

let train=['wap7', 'wap4', 'wap1'];
console.log(typeof train);    //here the type of arrays is also object

let sum = (10 + 20 + 30 + "chaitanya");
let sum1 = (10 + 20 + 30);
let sum2 = ("chaitu" + "207" + 30 + 20 + 50 + 80 + 60 + "reddy");
const sum3 = (30 + 20 + 50 + 50 + 20 + "20" + "30");
console.log(sum);
console.log(typeof sum); // here the output is string
console.log(typeof sum1, sum1);//here the output is number 60
console.log(typeof sum2, sum2);
console.log(sum3,typeof sum3);


// const obj = "chaitu";

var obj = {
    name12: "puma",
}
obj.company = "indian company";
console.log(obj);

var company = {
    name13: "watch",
};
company.brand = "fastrack";
console.log(company, typeof company);

let company1 = {               //how to add the data
    name14:"mobile",
}
company1['phone'] = 'apple'; 
console.log(company1);  //here the output will be { name14: 'mobile', phone: 'apple' }



const arr = ["abc", "def", "ghi", "jkl",'wxyz'];
console.log(arr);
arr[arr.length] = "mno";
console.log(arr.length);
arr[arr.length] = 'pqr', 'stuv', 'wxyz';
console.log(arr);


const array = ['abc', 'def', 'ghi'];
console.log(array);
array[array.length] = 'jkl','mno';
console.log(array);
console.log(array.length);