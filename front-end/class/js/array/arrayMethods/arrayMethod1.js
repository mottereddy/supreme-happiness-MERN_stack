


// const varname = document.getElementById("name");
// let arr = ["chaitu", "chaitanya", "sai"];
// console.log(arr);
// varname.innerText = arr;

//here .innertext is internally goining to convert toString
//output is dipslayeed in html page

//2nd program--------------------------------------------------------------------

let arr1 = ["chaitu", "chaitanya", "sai"];
// console.log(arr1.toString());

//here .to String method is goining to convert array to toString separated by commas

//-------------------------------------------------------------------------------------
const obj = {
    name:"chaitu",
}
// console.log(obj.toString());
//--------------------------------------------------------------------------------------

//join()method
console.log(arr1.join("+")); //chaitu+chaitanya+sai
console.log(arr1.join("*"));//chaitu*chaitanya*sai
console.log(arr1.join(" "));//chaitu chaitanya sai

//---------------------------------------------------------------------------------------

const arr = ["chaitu", "chaitanya", "sai"];
arr.push("mcr");
console.log(arr); //[ 'chaitu', 'chaitanya', 'sai', 'mcr' ]
arr.pop(" ");
console.log(arr);//[ 'chaitu', 'chaitanya', 'sai' ]

arr.pop("chaitu"); // ig wont deletes chaitu it will go only end of the element
console.log(arr);//[ 'chaitu', 'chaitanya' ]

//--------------------------------------------------------------------------------------
//shift is goining to delete the first element in the array

let arr3 = ["chaitu", "chaitanya", "sai","vedansh"];
arr3.shift();
console.log(arr3);  //[ 'chaitanya', 'sai' ]

//unshift is goining to replace the 1st element with other element

arr3.unshift("ravi");
console.log(arr3);//[ 'ravi', 'chaitanya', 'sai', 'vedansh' ]

console.log(arr3.length); // 4


//---------------------------------------------------------------------------------
//concat method 
let arr4 = ["chaitu", "chaitanya", "sai", "vedansh"];
let arr5 = ["abc", "123", "456", "789"];
let arr6 = ["894", "game1"];
const varName = arr4.concat(arr5, arr6);
console.log(varName);
// ['chaitu', 'chaitanya','sai','vedansh','abc','123','456','789','894','game1]

//----------------------------------------------------------------------------------

//slice method

const arr7 = ["chaitu", "chaitanya", "sai", "vedansh"];
const varname = arr7.slice(1, 3);
console.log(varname);//[ 'chaitanya', 'sai' ]
console.log(arr7);

//--------------------------------------------------------------------------------

const arr8 = ["123", "456", "789", "1011","abc","def","sai","chaitu","nellore"];
const varname4 = arr8.splice(1, 3);
console.log("splice = " + varname4);//splice = 456,789,1011
console.log(arr8);//[123, 'abc', 'def', 'sai', 'chaitu','nellore']

//if we use splice method it will cut the data from orginal array and print separately
//in splice the orginal array will be effected

const varname5 = arr8.splice(1, 4, "chaitanya", "reddy","sai","bza","mas");
console.log(arr8);//[ '123', 'chaitanya', 'reddy', 'sai', 'bza', 'mas', 'nellore' ]
console.log("splice2 = " + varname5)//abc,def,sai,chaitu


//=========================================================================================

let arr9 = ["ghi", "mno", "sai", "abc"];
arr9.sort();
console.log(arr9);//[ 'abc', 'ghi', 'mno', 'sai' ]

//in numbers the sorting will takes the first number thus why the output is like this
let arr10 = ["12", "5", "98", "78"];
console.log(arr10.sort()); //[ '12', '5', '78', '98' ]

//----------------------------------------------------------------------------------------




















