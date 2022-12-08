
// let arrReduce = ["i ", "like ", "to explore ", "new ", "places "];
 
// function reducefn(accumulator,currentvalue) {
//     return accumulator + currentvalue;
// };

// let data = arrReduce.reduce(reducefn);
// console.log(data);




// let arrmap = ["i ", "like ", "to explore ", "new ", "places "];
 
// function redfn(currentvalue) {
//     return currentvalue;
// };

// let datamap = arrmap.map(redfn);
// console.log(datamap);



// let arrfilter = ["i ", "like ", "to explore ", "new ", "places "];
 
// function redfn(currentvalue) {
//     return currentvalue;
// };

// let datafilter = arrfilter.filter(redfn);
// console.log(datafilter);


//------------------------------------------------------------------------------------------------




// let arr = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4, 5, 6, 7, 8, 9, 7, 8, 9];

// let data = arr.reduce(function (accumulator, currentvalue) {
//     if (accumulator.indexOf(currentvalue) ===-1) {
//         accumulator.push(currentvalue);
//     }
//     return accumulator;
// },[]);
 
// console.log(data);




// let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
// let uniqueAgeGroup = ageGroup.reduce(function (accumulator, currentValue) {
//   if (accumulator.indexOf(currentValue) === -1) {
//     accumulator.push(currentValue);
//   }
//   return accumulator;
// }, []);

// console.log(uniqueAgeGroup); // [ 18, 21, 1, 51, 5, 7, 10 ]





//---------------------------------------------------------------------------------------


let arr = [1, 2, 3];
let data = arr.reduce(function (accumulator, currentvalue) {
    if (accumulator < currentvalue) {
        return currentvalue;
    } else { 
        return accumulator;
    }
},arr[0]);
console.log(data);