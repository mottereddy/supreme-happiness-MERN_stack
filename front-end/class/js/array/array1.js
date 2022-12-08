const a = [10, 20, 30, 40, 50];

console.log(typeof a); //object--> array is an object
var b = new Array(10); //second method to create the array with new keyword
console.log(b); //if we given like this then it will took like size of an array

a[0] = 100;
console.log(a);//[ 100, 20, 30, 40, 50 ]

delete[2];
console.log(a.length);




