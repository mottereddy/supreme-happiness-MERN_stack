
// const fn = function name1(number) {
//     let x = 10;
//     let y = 20;
//     return number * number+x+y;
// };

// const z = fn(5);
// console.log(z);


function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const f = function (x) {
  return x * x * x;
}

const numbers = [0, 1, 2, 5, 10];
const cube = map(f, numbers);
console.log(cube);