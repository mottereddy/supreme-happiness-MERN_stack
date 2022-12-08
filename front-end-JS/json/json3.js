// const jsonData = [
// 	{
// 		color: "red",
// 		value: "#f00"
// 	},
// 	{
// 		color: "green",
// 		value: "#0f0"
// 	},
// 	{
// 		color: "blue",
// 		value: "#00f"
// 	},
// 	{
// 		color: "cyan",
// 		value: "#0ff"
// 	},
// 	{
// 		color: "magenta",
// 		value: "#f0f"
// 	},
// 	{
// 		color: "yellow",
// 		value: "#ff0"
// 	},
// 	{
// 		color: "black",
// 		value: "#000"
// 	}
// ]

// for (const i in jsonData) {
//     // console.log(jsonData[i].color);
// }


// const color = [
//     { size: 25, brand: "bata" },
//     { size: 26, brand: "nike" },
//     { size: 27, brand: "addidas" },
//     { size: 28, brand: "puma" },
//     { size: 29, brand: "roadster" },
//     { size: 21, brand: "allensolly" },
//     { size: 22, brand: "snikkers" },
//     { size: 23, brand: "decatlon" },
//     { size: 24, brand: "paragon" },
// ];

// for (const key in color) {
//     console.log(color[key].brand);
// }


// const obj100 = JSON.parse(color);
// console.log(obj100.brand);

// for (const i in color) {
//     console.log(color[i].size);
// }




// let text = '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
//     '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// const obj = JSON.parse(text);
// console.log(obj.employees[1].firstName);




// let text = '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
//     '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// for (const i in text) {
//     console.log(text.slice(1, 2));
// }





const obj = [{ "firstName": "John", "lastName": "Doe" },
    { "firstName": "chaitu", "lastName": "reddy" },
{ "firstName": "chaitnaya", "lastName": "vedansh" },
    { "firstName": "lakshman", "lastName": "reddy" }]

for (const key in obj) {
    console.log(obj[key].firstName);
}
for (const key2 in obj) {
    console.log(obj[key2].lastName);
}



// let arr = [1, 2, 3, 4, 5];
// let res = arr.map((item) => item * 2);
// console.log(res);
// let arr = [1, 2, 3, 4, 5, 6];
// let result = arr.map((chaitu) => chaitu * 2);
// console.log(result);

// let result2 = arr.filter((item) => item * 2);
// console.log("filter = " + result2);
// let result3 = arr.reduce((chaitu) => chaitu / 2 == 0);
// console.log(result3);

