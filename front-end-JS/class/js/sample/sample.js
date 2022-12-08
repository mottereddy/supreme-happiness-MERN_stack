var a;
{
  console.log(a,1);
  var a = 20;
  console.log(a,2);
}
function demo() {
  console.log(a,3);
  var a = 40;
  console.log(a,4);
}
demo();
console.log(a,5);

 
var y = 20;
function bar() {
  var y = 200;
  function baz() {
    console.log(y);    
  }
  baz();
}
bar();



var name = "chaitu";
function name1() {
  console.log(name);
  name = "sai";
  // console.log(name);

};
name1();

function name1() {
console.log(x);  
};
name1();
let x = 20;
console.log(x);




var a = 20;
function one() {
  console.log(1, a);
  var a = 30;
  // console.log(2, a);
  function two() {
    a = 40;
    console.log(2,a);
    
  }
  console.log(3, a);
  two();
}
one();
console.log(4,a)